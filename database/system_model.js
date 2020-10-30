const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/systemreqs', { useNewUrlParser: true });
const autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connected to Mongodb')});

const systemSchema = new mongoose.Schema({
  minimum: [
    {
      name: {type: String, required: true},
      os: {type: String, required: true},
      processor: {type: String, required: true},
      memory: {type: String, required: true},
      storage: {type: String, required: true},
      graphics: {type: String, required: true}
    },
    {
      name: {type: String, required: true},
      os: {type: String, required: true},
      processor: {type: String, required: true},
      memory: {type: String, required: true},
      storage: {type: String, required: true},
      graphics: {type: String, required: true}
    },
    {
      name: {type: String, required: true},
      os: {type: String, required: true},
      processor: {type: String, required: true},
      memory: {type: String, required: true},
      storage: {type: String, required: true},
      graphics: {type: String, required: true}
    },
    {
      name: {type: String, required: true},
      os: {type: String, required: true},
      processor: {type: String, required: true},
      memory: {type: String, required: true},
      storage: {type: String, required: true},
      graphics: {type: String, required: true}
    }
  ],
  recommended: [
    {
      name: {type: String, required: true},
      os: {type: String, required: true},
      processor: {type: String, required: true},
      memory: {type: String, required: true},
      storage: {type: String, required: true},
      graphics: {type: String, required: true}
    },
    {
      name: {type: String, required: true},
      os: {type: String, required: true},
      processor: {type: String, required: true},
      memory: {type: String, required: true},
      storage: {type: String, required: true},
      graphics: {type: String, required: true}
    },
    {
      name: {type: String, required: true},
      os: {type: String, required: true},
      processor: {type: String, required: true},
      memory: {type: String, required: true},
      storage: {type: String, required: true},
      graphics: {type: String, required: true}
    },
    {
      name: {type: String, required: true},
      os: {type: String, required: true},
      processor: {type: String, required: true},
      memory: {type: String, required: true},
      storage: {type: String, required: true},
      graphics: {type: String, required: true}
    }
  ]
});

autoIncrement.initialize(db);
systemSchema.plugin(autoIncrement.plugin, { model: 'System', field: 'bundleId', startAt: 1, incrementBy: 1 });
const System = new mongoose.model('System', systemSchema);

const saveNewSystem = (systemObj) => {
  const newSystem = new System({
    minimum: [
      {
        name: systemObj.minimum[0].name,
        os: systemObj.minimum[0].os,
        processor: systemObj.minimum[0].processor,
        memory: systemObj.minimum[0].memory,
        storage: systemObj.minimum[0].storage,
        graphics: systemObj.minimum[0].graphics
      },
      {
        name: systemObj.minimum[1].name,
        os: systemObj.minimum[1].os,
        processor: systemObj.minimum[1].processor,
        memory: systemObj.minimum[1].memory,
        storage: systemObj.minimum[1].storage,
        graphics: systemObj.minimum[1].graphics
      },
      {
        name: systemObj.minimum[2].name,
        os: systemObj.minimum[2].os,
        processor: systemObj.minimum[2].processor,
        memory: systemObj.minimum[2].memory,
        storage: systemObj.minimum[2].storage,
        graphics: systemObj.minimum[2].graphics
      },
      {
        name: systemObj.minimum[3].name,
        os: systemObj.minimum[3].os,
        processor: systemObj.minimum[3].processor,
        memory: systemObj.minimum[3].memory,
        storage: systemObj.minimum[3].storage,
        graphics: systemObj.minimum[3].graphics
      }
    ],
    recommended: [
      {
        name: systemObj.recommended[0].name,
        os: systemObj.recommended[0].os,
        processor: systemObj.recommended[0].processor,
        memory: systemObj.recommended[0].memory,
        storage: systemObj.recommended[0].storage,
        graphics: systemObj.recommended[0].graphics
      },
      {
        name: systemObj.recommended[1].name,
        os: systemObj.recommended[1].os,
        processor: systemObj.recommended[1].processor,
        memory: systemObj.recommended[1].memory,
        storage: systemObj.recommended[1].storage,
        graphics: systemObj.recommended[1].graphics
      },
      {
        name: systemObj.recommended[2].name,
        os: systemObj.recommended[2].os,
        processor: systemObj.recommended[2].processor,
        memory: systemObj.recommended[2].memory,
        storage: systemObj.recommended[2].storage,
        graphics: systemObj.recommended[2].graphics
      },
      {
        name: systemObj.recommended[3].name,
        os: systemObj.recommended[3].os,
        processor: systemObj.recommended[3].processor,
        memory: systemObj.recommended[3].memory,
        storage: systemObj.recommended[3].storage,
        graphics: systemObj.recommended[3].graphics
      }
    ]
  });

  return newSystem.save((err, system) => {
    if (err) {
      console.error(err);
    } else {
      return system;
    }
  });
};

const getSystemRequirements = async (bundleId) => {
  try {
    const systemReqs = await System.findOne({ bundleId });
    if (systemReqs.length === 0) {
      throw err;
    }
    return systemReqs;
  } catch (err) {
    throw err;
  }
};


module.exports = { System: System, saveNewSystem, getSystemRequirements };
