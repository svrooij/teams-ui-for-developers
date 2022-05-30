---
title: Button
---

## Button

To create a button you need to set the `btn` class to an object.

### Html

```html
<a href="#" class="btn">Test button</a>
```

### Tailwind

```css
@layer components {
  .btn {
    @apply bg-teamsb-fg hover:bg-teamsb-bg3 border-2
    border-transparent hover:border-white text-base
    text-white font-normal py-2 px-4 rounded;
  }
}
```

### Sample

<a href="#" class="btn">Test button</a>
