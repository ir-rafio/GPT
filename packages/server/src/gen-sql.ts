import { nicknames } from "./utils/information";

function replaceSingleQuotes(input: string): string {
  return input.replace(/'/g, "''");
}

for (let i = 0; i < nicknames.length; i++) {
  const nickname = nicknames[i];
  const name = replaceSingleQuotes(nickname.name);
  const sql = `INSERT INTO "Nickname" ("name", "sender", "receiver") VALUES('${name}', 190041115, ${nickname.receiver});`;

  console.log(sql);
}
