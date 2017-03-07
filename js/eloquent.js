var output = "";
for (var line = 1; line <= 8; line += 1) {
  if (line % 2 == 1) output = output + ' ';
  for (var position = 0; position < 8; position += 1) {
    if (position % 2 == 0)
      output += '#';
    else
      output += ' ';
  };
  output += "\n";
};

console.log(output);

