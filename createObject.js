const level1 = {
  id: "root",
  name: "Main Structure",
  metadata: {
    created: "2024-01-15",
    version: "1.0.0",
    tags: ["nested", "example", "complex"],
    history: [
      ["2024-01-01", "initial draft", ["john", "reviewers"]],
      ["2024-01-10", "first revision", ["alice", "bob", "qa-team"]],
      ["2024-01-15", "final version", ["all-members", "stakeholders"]],
    ],
  },
};

let newLevel1 = {};
console.log(newLevel1)
// direct assign
newLevel1.name = level1.name;
console.log(newLevel1)
// spread op
newLevel1 = { ...newLevel1, version: level1.metadata.version };
console.log(newLevel1)
// object.assign
Object.assign(newLevel1, { history: level1.metadata.history });
console.log(newLevel1)
