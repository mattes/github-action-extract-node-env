# github-action-extract-node-env

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
