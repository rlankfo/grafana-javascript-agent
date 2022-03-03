import type { BaseObject } from '../../utils';
export declare enum LogLevel {
    TRACE = "trace",
    DEBUG = "debug",
    INFO = "info",
    LOG = "log",
    WARN = "warn",
    ERROR = "error"
}
export declare type LogContext = BaseObject;
export interface LogEvent {
    context: LogContext;
    level: LogLevel;
    message: string;
    timestamp: string;
}
export interface LogsAPI {
    callOriginalConsoleMethod: (level: LogLevel, ...args: unknown[]) => void;
    pushLog: (args: unknown[], level?: LogLevel, context?: LogContext) => void;
}
