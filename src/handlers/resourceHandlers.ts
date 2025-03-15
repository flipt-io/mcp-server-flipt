import { FliptClient } from '../services/fliptClient';

/**
 * ResourceHandlers provides methods to handle MCP resource requests
 */
export class ResourceHandlers {
  private fliptClient: FliptClient;

  constructor(fliptClient: FliptClient) {
    this.fliptClient = fliptClient;
  }

  /**
   * Handle namespaces resource
   */
  async handleNamespaces(uri: URL) {
    console.log('Handling namespaces resource:', uri.toString());

    try {
      const namespaces = await this.fliptClient.listNamespaces();

      return {
        contents: namespaces.map(namespace => ({
          uri: `flipt://namespaces/${namespace.key}`,
          text: namespace.name,
        })),
      };
    } catch (error) {
      console.error('Error handling namespaces resource:', error);
      throw error;
    }
  }

  /**
   * Handle namespace resource
   */
  async handleNamespace(uri: URL, { namespaceKey }: { namespaceKey: string }) {
    console.log('Handling namespace resource:', uri.toString());

    try {
      const namespace = await this.fliptClient.getNamespace(namespaceKey);

      return {
        contents: [
          {
            uri: `flipt://namespaces/${namespace.key}`,
            text: namespace.name,
          },
        ],
      };
    } catch (error) {
      console.error('Error handling namespace resource:', error);
      throw error;
    }
  }

  /**
   * Handle flags resource
   */
  async handleFlags(uri: URL, { namespaceKey }: { namespaceKey: string }) {
    console.log('Handling flags resource:', uri.toString());

    try {
      const flags = await this.fliptClient.listFlags(namespaceKey);

      return {
        contents: flags.map(flag => ({
          uri: `flipt://namespaces/${namespaceKey}/flags/${flag.key}`,
          text: flag.name,
        })),
      };
    } catch (error) {
      console.error('Error handling flags resource:', error);
      throw error;
    }
  }

  /**
   * Handle flag resource
   */
  async handleFlag(uri: URL, { namespaceKey, flagKey }: { namespaceKey: string; flagKey: string }) {
    console.log('Handling flag resource:', uri.toString());

    try {
      const flag = await this.fliptClient.getFlag(namespaceKey, flagKey);

      return {
        contents: [
          {
            uri: `flipt://namespaces/${namespaceKey}/flags/${flag.key}`,
            text: flag.name,
          },
        ],
      };
    } catch (error) {
      console.error('Error handling flag resource:', error);
      throw error;
    }
  }

  /**
   * Handle segments resource
   */
  async handleSegments(uri: URL, { namespaceKey }: { namespaceKey: string }) {
    console.log('Handling segments resource:', uri.toString());

    try {
      const segments = await this.fliptClient.listSegments(namespaceKey);

      return {
        contents: segments.map(segment => ({
          uri: `flipt://namespaces/${namespaceKey}/segments/${segment.key}`,
          text: segment.name,
        })),
      };
    } catch (error) {
      console.error('Error handling segments resource:', error);
      throw error;
    }
  }

  /**
   * Handle segment resource
   */
  async handleSegment(
    uri: URL,
    { namespaceKey, segmentKey }: { namespaceKey: string; segmentKey: string }
  ) {
    console.log('Handling segment resource:', uri.toString());

    try {
      const segment = await this.fliptClient.getSegment(namespaceKey, segmentKey);

      return {
        contents: [
          {
            uri: `flipt://namespaces/${namespaceKey}/segments/${segment.key}`,
            text: segment.name,
          },
        ],
      };
    } catch (error) {
      console.error('Error handling segment resource:', error);
      throw error;
    }
  }

  /**
   * Handle rules resource
   */
  async handleRules(
    uri: URL,
    { namespaceKey, flagKey }: { namespaceKey: string; flagKey: string }
  ) {
    console.log('Handling rules resource:', uri.toString());

    try {
      // Since we don't have a getRules method in our simplified FliptClient,
      // we'll return a mock response
      return {
        contents: [
          {
            uri: `flipt://namespaces/${namespaceKey}/flags/${flagKey}/rules/1`,
            text: 'Example Rule',
          },
        ],
      };
    } catch (error) {
      console.error('Error handling rules resource:', error);
      throw error;
    }
  }

  /**
   * Handle rollouts resource
   */
  async handleRollouts(
    uri: URL,
    { namespaceKey, flagKey }: { namespaceKey: string; flagKey: string }
  ) {
    console.log('Handling rollouts resource:', uri.toString());

    try {
      // Since we don't have a getRollouts method in our simplified FliptClient,
      // we'll return a mock response
      return {
        contents: [
          {
            uri: `flipt://namespaces/${namespaceKey}/flags/${flagKey}/rollouts/1`,
            text: 'Example Rollout',
          },
        ],
      };
    } catch (error) {
      console.error('Error handling rollouts resource:', error);
      throw error;
    }
  }
}
