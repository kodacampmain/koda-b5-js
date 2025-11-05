const data = {
  level1: {
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
    matrix: [
      [
        {
          id: 1,
          values: [
            [1, 2],
            [3, 4],
          ],
        },
        {
          id: 2,
          values: [
            [5, 6],
            [7, 8],
          ],
        },
      ],
      [
        {
          id: 3,
          values: [
            [9, 10],
            [11, 12],
          ],
        },
        {
          id: 4,
          values: [
            [13, 14],
            [15, 16],
          ],
        },
      ],
    ],
    children: [
      {
        level2: {
          id: "section_a",
          title: "Primary Section",
          type: "container",
          coordinates: [
            [40.7128, -74.006],
            [34.0522, -118.2437],
            [51.5074, -0.1278],
          ],
          dataGrid: [
            [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
            ],
            [
              [10, 11, 12],
              [13, 14, 15],
              [16, 17, 18],
            ],
          ],
          attributes: {
            visible: true,
            editable: false,
            permissions: {
              read: [
                ["user", "guest"],
                ["admin", "moderator"],
              ],
              write: [["admin"], ["superadmin"]],
              delete: [["superadmin"]],
              matrix: [
                [
                  [true, false, true],
                  [false, true, false],
                ],
                [
                  [true, true, false],
                  [false, false, true],
                ],
              ],
              settings: {
                inheritance: true,
                constraints: {
                  maxDepth: 10,
                  validationRules: [
                    {
                      rule: "unique_ids",
                      parameters: {
                        scope: "global",
                        caseSensitive: false,
                        allowedPatterns: [
                          ["^[a-z]+", "starts with letter"],
                          ["\\d+$", "ends with number"],
                          ["^[A-Za-z0-9_]*$", "alphanumeric only"],
                        ],
                      },
                      enforcement: {
                        level: "strict",
                        actions: [
                          ["block_creation", "immediate"],
                          ["log_violation", "notify"],
                          ["notify_admins", "escalate"],
                        ],
                        schedules: [
                          [
                            ["mon", "9:00-17:00"],
                            ["tue", "9:00-17:00"],
                          ],
                          [
                            ["wed", "10:00-18:00"],
                            ["thu", "10:00-18:00"],
                          ],
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
          content: [
            {
              level3: {
                id: "subsection_1",
                name: "Data Subsection",
                data: {
                  records: [
                    {
                      level4: {
                        recordId: "rec_001",
                        timestamp: "2024-01-15T10:30:00Z",
                        dataPoints: [
                          [
                            [1.1, 2.2],
                            [3.3, 4.4],
                          ],
                          [
                            [5.5, 6.6],
                            [7.7, 8.8],
                          ],
                        ],
                        payload: {
                          level5: {
                            type: "user_activity",
                            activityMatrix: [
                              [
                                ["login", "10:30", true],
                                ["browse", "10:35", true],
                                ["purchase", "10:40", false],
                              ],
                              [
                                ["logout", "11:00", true],
                                ["login", "11:30", true],
                              ],
                            ],
                            details: {
                              level6: {
                                action: "login",
                                path: ["home", "login", "dashboard"],
                                device: {
                                  level7: {
                                    type: "mobile",
                                    sensors: [
                                      [
                                        ["accelerometer", "active", 100],
                                        ["gyroscope", "active", 50],
                                      ],
                                      [
                                        ["gps", "active", 75],
                                        ["compass", "inactive", 0],
                                      ],
                                    ],
                                    os: {
                                      level8: {
                                        name: "iOS",
                                        version: "17.2",
                                        build: "21C52",
                                        capabilities: [
                                          ["biometric_auth", "face_id", "secure_enclave"],
                                          ["arkit", "core_ml", "siri"],
                                          ["wallet", "apple_pay", "healthkit"],
                                        ],
                                        performance: [
                                          [
                                            [85, 90, 88],
                                            [78, 82, 80],
                                          ],
                                          [
                                            [92, 95, 93],
                                            [87, 89, 88],
                                          ],
                                        ],
                                      },
                                    },
                                    network: {
                                      level8: {
                                        type: "wifi",
                                        security: "WPA3",
                                        signal_strength: -45,
                                        channels: [
                                          [1, 6, 11],
                                          [36, 40, 44, 48],
                                        ],
                                        throughput: [
                                          [
                                            [24.5, 25.1],
                                            [23.8, 24.9],
                                          ],
                                          [
                                            [26.2, 25.8],
                                            [25.5, 26.1],
                                          ],
                                        ],
                                      },
                                    },
                                  },
                                },
                                location: {
                                  level7: {
                                    coordinates: {
                                      level8: {
                                        latitude: 40.7128,
                                        longitude: -74.006,
                                        accuracy: 15.5,
                                        history: [
                                          [
                                            [40.712, -74.007],
                                            [40.7125, -74.0065],
                                          ],
                                          [
                                            [40.713, -74.0055],
                                            [40.7128, -74.006],
                                          ],
                                        ],
                                      },
                                    },
                                    addresses: [
                                      [
                                        ["123 Main St", "Apt 4B"],
                                        ["New York", "NY", "10001"],
                                      ],
                                      [
                                        ["456 Oak Ave", "Suite 200"],
                                        ["Brooklyn", "NY", "11201"],
                                      ],
                                    ],
                                  },
                                },
                              },
                            },
                            analytics: {
                              level6: {
                                session: {
                                  level7: {
                                    id: "sess_xyz789",
                                    duration: 3600,
                                    events: [
                                      [
                                        ["page_view", 120, "/home"],
                                        ["click", 125, "button_login"],
                                      ],
                                      [
                                        ["api_call", 130, "auth/login"],
                                        ["redirect", 135, "/dashboard"],
                                      ],
                                    ],
                                    tokens: {
                                      level8: {
                                        access: "eyJhbGciOiJ...",
                                        refresh: "eyJhbGciOiJ...",
                                        expires_in: 3600,
                                        scopes: [
                                          ["read:profile", "write:settings"],
                                          ["read:data", "write:data"],
                                          ["admin:users"],
                                        ],
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    {
                      level4: {
                        recordId: "rec_002",
                        timestamp: "2024-01-15T11:15:00Z",
                        dataPoints: [
                          [
                            [9.9, 8.8],
                            [7.7, 6.6],
                          ],
                          [
                            [5.5, 4.4],
                            [3.3, 2.2],
                          ],
                        ],
                        payload: {
                          level5: {
                            type: "purchase",
                            orderMatrix: [
                              [
                                [1, "Laptop", 1299.99],
                                [2, "Mouse", 25.5],
                                [3, "Keyboard", 75.0],
                              ],
                              [
                                [4, "Monitor", 299.99],
                                [5, "Stand", 89.99],
                              ],
                            ],
                            details: {
                              level6: {
                                order: {
                                  level7: {
                                    id: "ord_456",
                                    items: [
                                      {
                                        level8: {
                                          productId: "prod_123",
                                          name: "Laptop",
                                          price: 1299.99,
                                          categories: [
                                            ["electronics", "computers"],
                                            ["laptops", "ultrabooks"],
                                          ],
                                          specifications: {
                                            processor: "Intel i7",
                                            ram: "16GB",
                                            storage: "1TB SSD",
                                            benchmarks: [
                                              [
                                                [1500, 1600, 1550],
                                                [3200, 3300, 3250],
                                              ],
                                              [
                                                [2800, 2900, 2850],
                                                [4100, 4200, 4150],
                                              ],
                                            ],
                                          },
                                        },
                                      },
                                    ],
                                    payments: [
                                      [
                                        ["credit_card", "visa", 800.0],
                                        ["credit_card", "mastercard", 499.99],
                                      ],
                                    ],
                                    shipping: {
                                      level8: {
                                        method: "express",
                                        cost: 25.0,
                                        tracking: [
                                          ["NYC", "in_transit", "2024-01-16"],
                                          ["PHL", "processed", "2024-01-17"],
                                          ["destination", "delivered", "2024-01-18"],
                                        ],
                                        route: [
                                          [
                                            [40.7128, -74.006],
                                            [39.9526, -75.1652],
                                          ],
                                          [
                                            [39.9526, -75.1652],
                                            [38.9072, -77.0369],
                                          ],
                                        ],
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    ],
  },
};

console.log(data.level1.metadata.history[0][2][1])
console.log(data.level1.children[0].level2.dataGrid[1][1][1])
console.log(data.level1.children[0].level2.content[0].level3.data.records[0].level4.payload.level5.activityMatrix[0][2][0])
console.log(data.level1.children[0].level2.attributes.permissions.matrix[0][1][2])