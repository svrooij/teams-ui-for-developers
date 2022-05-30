---
title: Cards
---

## Card

To create a card you need to set the `card` class to a div.

### Html

```html
<div class="card">
  <div class="card-body">
    <div class="grow">
      <h5>Card title</h5>
      <p>Test</p>
    </div>
    <div class="card-action">
      <span>...</span>
    </div>
  </div>
</div>
```

### Tailwind

```css
@layer components {
  .card {
    @apply bg-white dark:bg-teamsdark-bg1
    dark:text-white rounded shadow-md hover:shadow-lg;
  }
  .card-body {
    @apply flex flex-row px-4 py-3 w-full;
  }
  .card-action {
    @apply flex items-center;
  }
}
```

### Sample

<div class="card">
  <div class="card-body">
    <div class="grow">
      <h5>Card title</h5>
      <p>Test</p>
    </div>
    <div class="card-action">
      <span>...</span>
    </div>
  </div>
</div>
