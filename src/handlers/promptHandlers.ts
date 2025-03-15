/**
 * Handlers for Flipt prompts in the MCP server
 */
export class PromptHandlers {
  /**
   * Handle list flags prompt
   */
  handleListFlags({ namespaceKey }: { namespaceKey: string }) {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `List all flags in the namespace "${namespaceKey}". You can access them at flipt://namespaces/${namespaceKey}/flags`,
          },
        },
      ],
    };
  }

  /**
   * Handle create boolean flag prompt
   */
  handleCreateBooleanFlag({
    namespaceKey,
    key,
    name,
    description,
    enabled,
  }: {
    namespaceKey: string;
    key: string;
    name: string;
    description?: string;
    enabled?: boolean;
  }) {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Create a new boolean flag in namespace "${namespaceKey}" with key "${key}", name "${name}"${description ? `, description "${description}"` : ''}${enabled !== undefined ? `, and default value ${enabled}` : ''}. Use the create-flag tool.`,
          },
        },
      ],
    };
  }

  /**
   * Handle toggle flag prompt
   */
  handleToggleFlag({
    namespaceKey,
    key,
    enabled,
  }: {
    namespaceKey: string;
    key: string;
    enabled: boolean;
  }) {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Update the flag "${key}" in namespace "${namespaceKey}" to set enabled=${enabled}. Use the update-flag tool.`,
          },
        },
      ],
    };
  }
}
