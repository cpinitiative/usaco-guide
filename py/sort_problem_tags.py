"""Sort the "tags" arrays in the problem JSON files alphabetically, in place.

Only reorders the tags; the surrounding formatting (prettier's one-line arrays,
or the multi-line form it uses once a line grows past 80 columns) is preserved.
"""

import json
import re
import sys

TAGS_RE = re.compile(r'("tags":\s*)(\[[^\]]*\])')


def sorted_tags_text(match: "re.Match[str]", text: str) -> str:
	array_text = match.group(2)
	try:
		tags = json.loads(array_text)
	except json.JSONDecodeError:
		return match.group(0)
	if not isinstance(tags, list) or not all(isinstance(t, str) for t in tags):
		return match.group(0)
	if tags == sorted(tags):
		return match.group(0)
	tags = sorted(tags)

	if "\n" in array_text:
		line_start = text.rfind("\n", 0, match.start()) + 1
		indent = text[line_start : match.start()]
		inner = "".join(f"{indent}  {json.dumps(t)},\n" for t in tags)
		# drop the trailing comma of the last element
		inner = inner[: inner.rstrip().rfind(",")] + "\n"
		array_text = f"[\n{inner}{indent}]"
	else:
		array_text = "[" + ", ".join(json.dumps(t) for t in tags) + "]"
	return match.group(1) + array_text


def sort_file(path: str) -> bool:
	"""Returns whether the file was modified."""
	with open(path, encoding="utf-8") as f:
		text = f.read()
	new_text = TAGS_RE.sub(lambda m: sorted_tags_text(m, text), text)
	if new_text == text:
		return False
	# never write out something we can't read back
	assert json.loads(new_text) is not None
	with open(path, "w", encoding="utf-8") as f:
		f.write(new_text)
	return True


def main() -> int:
	changed = [path for path in sys.argv[1:] if sort_file(path)]
	for path in changed:
		print(f"sorted tags in {path}")
	return 1 if changed else 0


if __name__ == "__main__":
	sys.exit(main())
