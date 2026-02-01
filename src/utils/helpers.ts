export const formatOutput = (data: string): string => {
    return data.trim().replace(/\n/g, '<br />');
};

export const validateCommand = (command: string, validCommands: string[]): boolean => {
    return validCommands.includes(command);
};

export const parseCommandInput = (input: string): string => {
    return input.trim().toLowerCase();
};