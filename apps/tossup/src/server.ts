import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
      draw: Model
    },

    seeds(server) {
      server.create('user', { name: 'Bob' });
      server.create('user', { name: 'Alice' });
      server.create('draw', { name: 'PS4' });
      server.create('draw', { name: 'Xbox' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', schema => {
        return schema.users.all();
      });
      this.get('/draws', schema => {
        return schema.draws.all();
      });
    }
  });

  return server;
}
