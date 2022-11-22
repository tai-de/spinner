
const spinner = [ `\r|   `, `\r/   `, `\r-   `, `\r\\   `, `\r|   `, `\r/   `, `\r-   `, `\r\\   `, `\r|   `, `\n` ];

for (const spin in spinner) {
  setTimeout(() => {
    process.stdout.write(spinner[spin]);
  }, 200 * spin);
}