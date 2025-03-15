import { FliptClient } from '../services/fliptClient';

/**
 * Handlers for Flipt tools in the MCP server
 */
export class ToolHandlers {
  private fliptClient: FliptClient;

  constructor(fliptClient: FliptClient) {
    this.fliptClient = fliptClient;
  }

  /**
   * Handle create namespace tool
   */
  async handleCreateNamespace({
    key,
    name,
    description,
  }: {
    key: string;
    name: string;
    description?: string;
  }) {
    try {
      const namespace = await this.fliptClient.createNamespace(key, name, description);
      return {
        content: [
          {
            type: 'text',
            text: `Successfully created namespace: ${JSON.stringify(namespace, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error('Error creating namespace:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Error creating namespace: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }

  /**
   * Handle update namespace tool
   */
  async handleUpdateNamespace({
    key,
    name,
    description,
  }: {
    key: string;
    name: string;
    description?: string;
  }) {
    try {
      const namespace = await this.fliptClient.updateNamespace(key, name, description);
      return {
        content: [
          {
            type: 'text',
            text: `Successfully updated namespace: ${JSON.stringify(namespace, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error(`Error updating namespace ${key}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Error updating namespace ${key}: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }

  /**
   * Handle delete namespace tool
   */
  async handleDeleteNamespace({ key }: { key: string }) {
    try {
      await this.fliptClient.deleteNamespace(key);
      return {
        content: [
          {
            type: 'text',
            text: `Successfully deleted namespace: ${key}`,
          },
        ],
      };
    } catch (error) {
      console.error(`Error deleting namespace ${key}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Error deleting namespace ${key}: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }

  /**
   * Handle create flag tool
   */
  async handleCreateFlag({
    namespaceKey,
    key,
    name,
    description,
    enabled,
    type,
  }: {
    namespaceKey: string;
    key: string;
    name: string;
    description?: string;
    enabled?: boolean;
    type: string;
  }) {
    try {
      const flag = await this.fliptClient.createFlag(
        namespaceKey,
        key,
        name,
        description,
        enabled,
        type
      );
      return {
        content: [
          {
            type: 'text',
            text: `Successfully created flag: ${JSON.stringify(flag, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error(`Error creating flag in namespace ${namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Error creating flag in namespace ${namespaceKey}: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }

  /**
   * Handle update flag tool
   */
  async handleUpdateFlag({
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
    try {
      const flag = await this.fliptClient.updateFlag(namespaceKey, key, name, description, enabled);
      return {
        content: [
          {
            type: 'text',
            text: `Successfully updated flag: ${JSON.stringify(flag, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error(`Error updating flag ${key} in namespace ${namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Error updating flag ${key} in namespace ${namespaceKey}: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }

  /**
   * Handle delete flag tool
   */
  async handleDeleteFlag({ namespaceKey, key }: { namespaceKey: string; key: string }) {
    try {
      await this.fliptClient.deleteFlag(namespaceKey, key);
      return {
        content: [
          {
            type: 'text',
            text: `Successfully deleted flag ${key} in namespace ${namespaceKey}`,
          },
        ],
      };
    } catch (error) {
      console.error(`Error deleting flag ${key} in namespace ${namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Error deleting flag ${key} in namespace ${namespaceKey}: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }

  /**
   * Handle create segment tool
   */
  async handleCreateSegment({
    namespaceKey,
    key,
    name,
    description,
    matchType,
  }: {
    namespaceKey: string;
    key: string;
    name: string;
    description?: string;
    matchType: string;
  }) {
    try {
      const segment = await this.fliptClient.createSegment(
        namespaceKey,
        key,
        name,
        description,
        matchType
      );
      return {
        content: [
          {
            type: 'text',
            text: `Successfully created segment: ${JSON.stringify(segment, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error(`Error creating segment in namespace ${namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Error creating segment in namespace ${namespaceKey}: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }

  /**
   * Handle update segment tool
   */
  async handleUpdateSegment({
    namespaceKey,
    key,
    name,
    description,
    matchType,
  }: {
    namespaceKey: string;
    key: string;
    name: string;
    description?: string;
    matchType: string;
  }) {
    try {
      const segment = await this.fliptClient.updateSegment(
        namespaceKey,
        key,
        name,
        description,
        matchType
      );
      return {
        content: [
          {
            type: 'text',
            text: `Successfully updated segment: ${JSON.stringify(segment, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error(`Error updating segment ${key} in namespace ${namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Error updating segment ${key} in namespace ${namespaceKey}: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }

  /**
   * Handle delete segment tool
   */
  async handleDeleteSegment({ namespaceKey, key }: { namespaceKey: string; key: string }) {
    try {
      await this.fliptClient.deleteSegment(namespaceKey, key);
      return {
        content: [
          {
            type: 'text',
            text: `Successfully deleted segment ${key} in namespace ${namespaceKey}`,
          },
        ],
      };
    } catch (error) {
      console.error(`Error deleting segment ${key} in namespace ${namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Error deleting segment ${key} in namespace ${namespaceKey}: ${error}`,
          },
        ],
        isError: true,
      };
    }
  }
}
