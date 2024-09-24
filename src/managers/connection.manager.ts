import connectMongodb from '@mongodb/connection';

async function connectDatabases() {
  await connectMongodb();
}

export default connectDatabases;
