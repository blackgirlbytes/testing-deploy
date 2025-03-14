import type { ServerConfig } from '../types/server';

export function getInstallCommand(platform: string): string {
  switch (platform.toLowerCase()) {
    case 'macos':
      return 'brew install goose';
    case 'linux':
      return 'curl -fsSL https://get.goose.ai | sh';
    case 'windows':
      return 'winget install goose';
    default:
      return 'Platform not supported';
  }
}

export function getInstallLink(arg: string): string {
  return `https://get.goose.ai/${arg}`;
}

export function getConfigCommand(env: ServerConfig): string {
  return `goose config set server ${env.serverUrl}`;
}

export function getAuthCommand(env: ServerConfig): string {
  return `goose auth login ${env.authUrl}`;
}