# `@openworkflowspec/dual-editor`

React component that displays the Open Workflow text and diagram editors in a resizable split view.

## Usage

```tsx
import { DualEditor } from "@openworkflowspec/dual-editor";
import "@openworkflowspec/dual-editor/styles.css";

<DualEditor
  content={workflow}
  onContentChange={setWorkflow}
  createLanguageServiceWorker={() =>
    new Worker(new URL("@openworkflowspec/text-editor/worker", import.meta.url), {
      type: "module",
    })
  }
/>;
```

The component fills its parent. Give the parent a definite height. Edits in either pane are synchronized and reported through `onContentChange`. Drag the divider to resize the panes; keyboard users can focus it and use the arrow keys, with Shift for larger steps. On narrow screens the panes stack vertically and the divider resizes their heights.

## Props

| Prop                          | Required | Default    | Description                                              |
| ----------------------------- | -------- | ---------- | -------------------------------------------------------- |
| `content`                     | Yes      | —          | Workflow definition as JSON or YAML.                     |
| `onContentChange`             | No       | —          | Called when either editor changes the workflow content.  |
| `createLanguageServiceWorker` | Yes      | —          | Creates the language service worker for the text editor. |
| `language`                    | No       | `"json"`   | Text editor language: `"json"` or `"yaml"`.              |
| `isReadOnly`                  | No       | `false`    | Makes both editors read only.                            |
| `locale`                      | No       | `"en"`     | Locale passed to the diagram editor.                     |
| `colorMode`                   | No       | `"system"` | Color mode passed to both editors.                       |
| `onSplitChange`               | No       | —          | Called with the text pane size percentage after changes. |
