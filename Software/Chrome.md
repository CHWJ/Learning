# 目录
- [目录](#目录)
  - [Network](#network)
    - [Filter](#filter)
      - [请求状态非200](#请求状态非200)
  - [chrome://about/](#chromeabout)
  - [console](#console)
    - [打印带颜色字符串](#打印带颜色字符串)


## Network

### Filter

#### 请求状态非200

```
-status-code:200
```

## chrome://about/

- chrome://accessibility
- chrome://appcache-internals
- chrome://apps
- chrome://blob-internals
- chrome://bookmarks
- chrome://cache
- chrome://chrome
- chrome://chrome-urls
- chrome://components
- chrome://conflicts
- chrome://copresence
- chrome://crashes
- chrome://credits
- chrome://device-log
- chrome://devices
- chrome://discards
- chrome://dns
- chrome://downloads
- chrome://extensions
- chrome://flags
- chrome://flash
- chrome://gcm-internals
- chrome://gpu
- chrome://help
- chrome://histograms
- chrome://history
- chrome://indexeddb-internals
- chrome://inspect
- chrome://invalidations
- chrome://local-state
- chrome://media-internals
- chrome://memory
- chrome://memory-internals
- chrome://nacl
- chrome://net-internals
- chrome://network-error
- chrome://network-errors
- chrome://newtab
- chrome://omnibox
- chrome://password-manager-internals
- chrome://plugins
- chrome://policy
- chrome://predictors
- chrome://print
- chrome://profiler
- chrome://quota-internals
- chrome://serviceworker-internals
- chrome://settings
- chrome://signin-internals
- chrome://suggestions
- chrome://sync-internals
- chrome://system
- chrome://terms
- chrome://thumbnails
- chrome://tracing
- chrome://translate-internals
- chrome://user-actions
- chrome://version
- chrome://view-http-cache
- chrome://webrtc-internals
- chrome://webrtc-logs
- For Debug

The following pages are for debugging purposes only. Because they crash or hang the - renderer, they're not linked directly; you can type them into the address bar if you need them.
- chrome://badcastcrash
- chrome://crash
- chrome://crashdump
- chrome://kill
- chrome://hang
- chrome://shorthang
- chrome://gpuclean
- chrome://gpucrash
- chrome://gpuhang
- chrome://ppapiflashcrash
- chrome://ppapiflashhang
- chrome://quit/
- chrome://restart/

## console

### 打印带颜色字符串

``` js
console.log(x.text + " expand: %c" + x.shouldExpand, "font-weight: bold;color: red;");
```