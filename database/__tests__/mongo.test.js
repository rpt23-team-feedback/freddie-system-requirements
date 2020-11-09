const {MongoClient} = require('mongodb');

describe('System Model', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
    db.createCollection('testSystems', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['name', 'os', 'processor', 'memory', 'storage', 'graphics'],
          properties: {
            name: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            os: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            processor: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            memory: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            storage: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            graphics: {
              bsonType: 'string',
              description: 'must be a string and is required'
            }
          }
        }
      },
      validationAction: 'error'
    })
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async (done) => {
    const systems = db.collection('testSystems');

    const mockSystem = {
      _id: '1',
      name: 'Steam',
      os: 'Steam 53177',
      processor: 'Bartell, Kertzmann and Crist 88860',
      memory: '33391 GB RAM',
      storage: '88236 GB',
      graphics: 'Chrysler 1678'
    };
    await systems.insertOne(mockSystem);

    const insertedSystem = await systems.findOne({_id: '1'});
    expect(insertedSystem).toEqual(mockSystem);
    done();
  });

  // it('should not insert a doc into collection with missing properties', async (done) => {
  //   const systems = db.collection('testSystems');

  //   const mockSystem = {
  //     _id: '2',
  //     // name: 'Steam',
  //     os: 'Steam 53177',
  //     processor: 'Bartell, Kertzmann and Crist 88860',
  //     memory: '33391 GB RAM',
  //     storage: '88236 GB',
  //     graphics: 'Chrysler 1678'
  //   };
  //   await systems.insertOne(mockSystem);

  //   const insertedSystem = await systems.findOne({_id: '2'});
  //   expect(insertedSystem).toThrow(Error);
  //   done();
  // })
});