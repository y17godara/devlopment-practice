// src/utils/logger.ts
import logger from "pino";
import daysjs from "dayjs";

const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${daysjs().format()}"`,
});

export default log;