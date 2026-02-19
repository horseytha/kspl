# KSPL Theme Implementation Guide

## Overview
Your KSPL Industrial Solutions website has been completely refreshed with a professional, cohesive brand identity. The theme centers around a premium gold and black color palette with a warm, sophisticated feel perfect for industrial products.

---

## 🎨 Brand Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Yellow** | #E3B300 | Primary CTAs, highlights, active states |
| **Gold** | #C89A00 | Secondary buttons, hover states |
| **Black** | #0A0A0A | Navigation, dark buttons, main text |
| **Grey** | #404040 | Secondary text, borders, icons |
| **Charcoal** | #404400 | Accents |
| **Dust Brown** | #C0A080 | Alternative accent color |
| **Background** | #F5F2EA | Main page background (warm off-white) |
| **Border** | #E0DCD4 | Subtle borders |
| **Success** | #4CAF50 | Success states, positive actions |
| **Danger** | #F44336 | Destructive actions, errors |

---

## 🔘 Button System

### 9 Button Variants

All buttons have consistent styling with hover, active, and disabled states.

#### 1. **Primary Button** `.btn-primary`
```jsx
<button className="btn-primary">Primary Action</button>
```
- **Colors:** Yellow (#E3B300) → Gold (#C89A00) on hover
- **Use for:** Main CTAs, "Add to Quote", "Submit"
- **Text Color:** Black

#### 2. **Secondary Button** `.btn-secondary`
```jsx
<button className="btn-secondary">Secondary Action</button>
```
- **Colors:** Gold (#C89A00) → Darker Gold (#A87C00) on hover
- **Use for:** Alternative CTAs, secondary actions
- **Text Color:** White

#### 3. **Outline Button** `.btn-outline`
```jsx
<button className="btn-outline">View Details</button>
```
- **Colors:** Transparent with yellow border → Yellow background on hover
- **Use for:** Tertiary actions, "View Details"
- **Text Color:** Yellow (white on hover)

#### 4. **Ghost Button** `.btn-ghost`
```jsx
<button className="btn-ghost">Learn More</button>
```
- **Colors:** Transparent → Light yellow (#FFF8E1) on hover
- **Use for:** Minimal actions, links styled as buttons
- **Text Color:** Yellow

#### 5. **Dark Button** `.btn-dark`
```jsx
<button className="btn-dark">Advanced Option</button>
```
- **Colors:** Black (#0A0A0A) → Grey (#404040) on hover
- **Use for:** Secondary dark-themed actions
- **Text Color:** White

#### 6. **Light Button** `.btn-light`
```jsx
<button className="btn-light">Alternative</button>
```
- **Colors:** Dust Brown (#C0A080) → Darker Brown on hover
- **Use for:** Alternative accent actions
- **Text Color:** White

#### 7. **Success Button** `.btn-success`
```jsx
<button className="btn-success">Confirm</button>
```
- **Colors:** Green (#4CAF50) → Darker Green on hover
- **Use for:** Confirmations, successful actions
- **Text Color:** White

#### 8. **Danger Button** `.btn-danger`
```jsx
<button className="btn-danger">Delete</button>
```
- **Colors:** Red (#F44336) → Darker Red on hover
- **Use for:** Destructive actions, warnings
- **Text Color:** White

#### 9. **Link Button** `.btn-link`
```jsx
<button className="btn-link">Forgot password?</button>
```
- **Colors:** Transparent with yellow text → Underline on hover
- **Use for:** Links styled as buttons, minimal CTAs
- **Text Color:** Yellow

---

### Button Sizes

Add these classes to any button variant:

```jsx
<button className="btn-primary btn-sm">Small</button>
<button className="btn-primary">Default (Medium)</button>
<button className="btn-primary btn-lg">Large</button>
<button className="btn-primary btn-xl">Extra Large</button>
<button className="btn-primary btn-block">Full Width</button>
```

| Class | Padding | Font Size |
|-------|---------|-----------|
| `.btn-sm` | `px-4 py-1.5` | `text-sm` |
| Default | `px-6 py-2.5` | Default |
| `.btn-lg` | `px-8 py-3` | `text-lg` |
| `.btn-xl` | `px-10 py-4` | `text-xl` |
| `.btn-block` | Full width | - |

---

### Button States

All buttons have automatic styling for states:

- **Default:** Normal appearance
- **Hover:** Color transition (smooth 200ms ease-in-out)
- **Active:** Darker color state
- **Disabled:** 50% opacity + `cursor-not-allowed`

```jsx
<button className="btn-primary" disabled>Disabled Button</button>
```

---

### Button Groups

#### Horizontal Group (`.btn-group`)
```jsx
<div className="btn-group">
  <button className="btn-primary">Save</button>
  <button className="btn-secondary">Update</button>
  <button className="btn-outline">Cancel</button>
</div>
```

#### Vertical Group (`.btn-group-vertical`)
```jsx
<div className="btn-group-vertical">
  <button className="btn-dark">Primary Action</button>
  <button className="btn-ghost">Secondary Action</button>
  <button className="btn-danger">Delete</button>
</div>
```

---

## 📱 Component Updates

All main components have been updated with the new theme:

### Navbar
- **Background:** Black (#0A0A0A)
- **Logo:** Yellow accent on "KSPL"
- **Search Input:** Cream background with yellow focus ring
- **Buttons:** Outline style with yellow borders

### Hero Banner
- **Background:** Black (#0A0A0A)
- **Heading Accent:** Yellow text for key phrases
- **Buttons:** Primary button (yellow) and outline button (yellow border)

### Product Card
- **Category Badge:** Yellow background, black text
- **Buttons:** Primary (Add to Quote) and outline (View Details)
- **Border:** Light grey (#E0DCD4)

### Footer
- **Background:** Black (#0A0A0A)
- **Headings:** Yellow text
- **Links:** Grey text with yellow hover state
- **Input:** Dark background with yellow focus ring

### Product Categories Bar
- **Active State:** Yellow text with yellow underline
- **Inactive State:** Grey text
- **Hover:** Darker text

### Offers Section
- **Icon Containers:** Light yellow background (#F5E4B8)
- **Icons:** Yellow color
- **Hover:** Light yellow background

---

## 🎯 Usage Examples

### Product Card with Buttons
```jsx
<div className="bg-white rounded-lg shadow-sm border border-[#E0DCD4]">
  <img src="product.jpg" alt="Product" />
  <h3 className="font-bold text-[#0A0A0A]">High Pressure Pipe</h3>
  <button className="btn-primary btn-block">Add to Quote</button>
  <button className="btn-outline btn-block">View Details</button>
</div>
```

### Modal Dialog
```jsx
<div className="bg-white rounded-lg p-6">
  <h2 className="text-xl font-bold text-[#0A0A0A]">Confirm Action</h2>
  <p className="text-[#404040] mb-6">Are you sure?</p>
  <div className="btn-group">
    <button className="btn-danger flex-1">Delete</button>
    <button className="btn-ghost flex-1">Cancel</button>
  </div>
</div>
```

### Form with Primary CTA
```jsx
<form className="space-y-4">
  <input 
    type="email" 
    placeholder="your@email.com"
    className="w-full px-3 py-2 border border-[#E0DCD4] rounded focus:ring-2 focus:ring-[#E3B300]"
  />
  <button type="submit" className="btn-primary btn-block">
    Submit Inquiry
  </button>
</form>
```

---

## 🌐 Utility Classes

```jsx
// Text colors
<p className="text-primary">Yellow text</p>
<p className="text-secondary">Grey text</p>

// Background colors
<div className="bg-primary">Yellow background</div>
<div className="bg-secondary">Gold background</div>

// Border colors
<div className="border border-primary">Yellow border</div>

// Shadows
<div className="shadow-primary">Enhanced shadow</div>
```

---

## 🔄 View the Button Showcase

A complete **Button Showcase** page has been created showing all variations in action:

```
http://localhost:5173/buttons-demo
```

This page displays:
- All 9 button variants with states
- All size variations
- Button groups (horizontal & vertical)
- Real-world usage examples
- Complete color palette reference

---

## 📋 Implementation Checklist

✅ **Completed:**
- Color theme system defined in `index.css`
- 9 button variants with full states
- Button sizes (sm, md, lg, xl, block)
- Button groups (horizontal & vertical)
- All components updated with new colors
- Navbar, Hero, Product Cards, Footer, etc.
- ButtonShowcase component created
- ButtonsDemo page added to routes

**Optional Enhancements:**
- [ ] Add more page color updates (Contact, FAQ, Products)
- [ ] Add button loading states with spinner
- [ ] Create icon button variant
- [ ] Add toast/notification styles
- [ ] Create form field focus styles documentation

---

## 💡 Design Principles

1. **Consistency:** All buttons follow the same design system
2. **Accessibility:** Sufficient contrast, clear hover states
3. **Hierarchy:** Primary > Secondary > Tertiary buttons
4. **Feedback:** Every interaction provides visual feedback
5. **Scalability:** Easy to extend for new features

---

## 🚀 Getting Started

1. Use `.btn-primary` for main CTAs (e.g., "Add to Quote")
2. Use `.btn-outline` for secondary CTAs (e.g., "View Details")
3. Use `.btn-danger` for destructive actions
4. Combine with size classes: `.btn-primary.btn-lg`
5. Group related buttons with `.btn-group` or `.btn-group-vertical`

---

## Questions?

Refer to the ButtonShowcase component for visual examples of every variation!

---

*Theme implemented: February 19, 2026*
*Primary Colors: #E3B300 (Yellow), #0A0A0A (Black), #F5F2EA (Background)*
