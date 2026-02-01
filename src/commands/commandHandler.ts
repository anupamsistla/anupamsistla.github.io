import { commands } from './commandRegistry';
import { CommandResult } from '../types';

export const handleCommand = (input: string): CommandResult => {
  const trimmedInput = input.trim();
  
  if (!trimmedInput) {
    return { type: 'text', content: '' };
  }

  // Check if exact command exists (including flags like "contact --email")
  if (commands[trimmedInput]) {
    return commands[trimmedInput].execute([]);
  }

  // Parse command and args
  const parts = trimmedInput.split(' ');
  const commandName = parts[0].toLowerCase();

  if (commands[commandName]) {
    const args = parts.slice(1);
    return commands[commandName].execute(args);
  }

  return {
    type: 'text',
    content: `Command not found: ${commandName}. Type 'help' for available commands.`
  };
};