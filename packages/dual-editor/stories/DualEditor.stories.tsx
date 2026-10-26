/*
 * Copyright 2021-Present The Open Workflow Specification Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { DualEditor } from "../src";

const meta = {
  title: "Editors/Dual Editor",
  component: DualEditor,
  parameters: { layout: "fullscreen" },
  args: {
    content: `{
  "document": {
    "dsl": "1.0.0",
    "namespace": "examples",
    "name": "hello-world",
    "version": "1.0.0",
    "do": [{ "log": { "message": "Hello, World!" } }]
  }
}`,
    language: "json",
    isReadOnly: false,
    locale: "en",
    colorMode: "light",
    createLanguageServiceWorker: () =>
      new Worker(new URL("@openworkflowspec/text-editor/worker", import.meta.url), {
        type: "module",
      }),
  },
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DualEditor {...args} />
    </div>
  ),
} satisfies Meta<typeof DualEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
