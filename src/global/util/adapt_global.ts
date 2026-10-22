import globals from 'globals';

const oxlintGlobals = (): Record<string, 'readonly' | 'writable'> => {
  const adapted: Record<string, 'readonly' | 'writable'> = {};

  for (const [key, value] of Object.entries(globals)) {
    const isWritable = value as unknown as boolean;
    adapted[key] = isWritable ? 'writable' : 'readonly';
  }

  return adapted;
};

export { oxlintGlobals };