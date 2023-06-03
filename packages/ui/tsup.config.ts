import { defineConfig } from 'tsup-preset-solid';

export default defineConfig(
  {
    entry: 'src/index.tsx',
    devEntry: true,
  },
  // additional options
  {
    // Setting `true` will console.log the package.json fields
    printInstructions: true,
    // Setting `true` will write export fields to package.json
    writePackageJson: true,
    // Setting `true` will remove all `console.*` calls and `debugger` statements
    dropConsole: true,
  }
) as any; // TODO - needs fixing in tsup-preset-solid
