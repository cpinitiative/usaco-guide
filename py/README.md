Miscellaneous Python scripts

## check_links.py

Finds links under `content/` and `solutions/` whose targets have died -- a
domain that lapsed, a page that 404s, or a domain that was re-registered by
someone else and now serves spam ([#6625][]).

```sh
python py/check_links.py          # ~5 minutes
python py/check_links.py --all    # every judge problem link too; ~40 minutes
```

**Run it from an ordinary connection, not from CI.** It was tried on a GitHub
Actions runner and 7 of its 8 findings were false -- bot defenses answer
datacenter IPs with 404s that the same pages do not serve to anyone else --
while the one hijacked domain it exists to catch went undetected. The script
assumes the network is answering honestly, which from a runner it is not.

Exit status is 1 when it finds something, so it will not pass a pre-commit hook
or a workflow by accident.

[#6625]: https://github.com/cpinitiative/usaco-guide/issues/6625
