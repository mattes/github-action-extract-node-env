# github-action-extract-node-env

Extract `ACTIONS_RUNTIME_TOKEN`, `ACTIONS_RUNTIME_URL`, `ACTIONS_CACHE_URL` or 
any other node ENV.

```
    - uses: mattes/github-action-extract-node-env@v1
      id: extract-node
      with:
        key: "ACTIONS_RUNTIME_URL"
        set_env: true

    - name: print output
      run: echo ${{ steps.extract-node.outputs.value }}

    - name: print ENV var
      run: echo $ACTIONS_RUNTIME_URL

```

See https://github.com/nektos/act/issues/329
