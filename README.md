# capacitor-shakebugs

Shakebugs plugin for capacitor

## Install

```bash
npm install capacitor-shakebugs
npx cap sync
```

## API

<docgen-index>

* [`start(...)`](#start)
* [`show(...)`](#show)
* [`registerUser(...)`](#registeruser)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### start(...)

```typescript
start(options: ShakeStartOptions) => any
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#shakestartoptions">ShakeStartOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### show(...)

```typescript
show(shakeScreen?: ShakeScreen | undefined) => void
```

| Param             | Type                                                |
| ----------------- | --------------------------------------------------- |
| **`shakeScreen`** | <code><a href="#shakescreen">ShakeScreen</a></code> |

--------------------


### registerUser(...)

```typescript
registerUser(options: RegisterUserOptions) => void
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#registeruseroptions">RegisterUserOptions</a></code> |

--------------------


### Interfaces


#### ShakeStartOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`apiKey`** | <code>string</code> |


#### ShakeScreen

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |


#### RegisterUserOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`userId`** | <code>string</code> |

</docgen-api>
