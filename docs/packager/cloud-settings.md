---
slug: /packager/embedding
hide_table_of_contents: true
sidebar_label: Cloud settings
---

# Partial support for special cloud behaviors, like HTMLifier

:::info
This page only applies to the [TurboWarp Packager](https://turbowarp.org/).
:::

### The TurboWarp packager now includes support for these through a toggle in the cloud variable section:

☁ url

☁ redirect

☁ open link (note: very unreliable, would not use)

☁ username

### These may be added in a later update, if there's interest:

☁ set clipboard (not expecting this to work reliably at all)

☁ pasted

### These may not be added:

☁ eval (unsafe in unsandboxed environments such as NW.js)

☁ eval output

☁ eval error

☁ set server ip (doubt anyone will ever use)

☁ local storage ... (we have a better system in the interface)
