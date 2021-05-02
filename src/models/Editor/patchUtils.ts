import { diff_match_patch } from 'diff-match-patch';

const diffMatchPatch: diff_match_patch = new diff_match_patch();

/**
 *
 * @param newText
 * @param oldText
 * @protected
 * @returns a text patch indicating how to go from fromText to toText
 */
export function makePatch(fromText: string, toText: string): string {
  return diffMatchPatch.patch_toText(
    diffMatchPatch.patch_make(toText, fromText)
  );
}

/**
 *
 * @param text
 * @param patch
 * @protected
 * @returns the result of applying the patch to fromText (ie, given
 * fromText and a patch from fromText to toText, returns toText)
 */
export function applyPatch(fromText: string, patch: string): string {
  const patchResult = diffMatchPatch.patch_apply(
    diffMatchPatch.patch_fromText(patch),
    fromText
  );
  if (patchResult[1].some(res => !res)) {
    console.log(fromText, patch, patchResult);
    throw new Error('Failed to apply patch due to one or more conflicts.');
  }
  return patchResult[0];
}
