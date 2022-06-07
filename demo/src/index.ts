import { TracingInstrumentation } from '@grafana/agent-tracing-web';
import { initializeAgent, getWebInstrumentations } from '@grafana/agent-web';

initializeAgent({
  url: 'http://localhost:12345/collect',
  apiKey: 'secret',
  instrumentations: [...getWebInstrumentations(), new TracingInstrumentation()],
  app: {
    name: 'frontend',
    version: '1.0.0',
  },
});
