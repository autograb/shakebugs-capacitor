export interface ShakeScreen {
  value: string;
}

export interface ShakeForm {
  components: ShakeFormComponent[];
}

export interface ShakeFormComponent {
  type: string;
  key: string;
  label: string | null;
  labelRes: string | null;
  initialValue: string;
  required: boolean;
  items: ShakePickerItem[] | null;
}

export interface ShakePickerItem extends ShakeFormComponent {
  key: string;
  text: string | null;
  textRes: string | null;
  icon: string | null;
  iconRes: string | null;
  tag: string | null;
}

export interface ShakeTheme {
  fontFamilyMedium: string | null;
  fontFamilyBold: string | null;
  backgroundColor: string | null;
  secondaryBackgroundColor: string | null;
  textColor: string | null;
  secondaryTextColor: string | null;
  accentColor: string | null;
  accentTextColor: string | null;
  outlineColor: string | null;
  borderRadius: number | null;
  elevation: number | null;
  shadowRadius: number | null;
  shadowOpacity: number | null;
  shadowOffset: { [key: string]: string } | null;
}

export interface ShakeBaseAction {
  title: string | null;
  titleRes: string | null;
  subtitle: string | null;
  subtitleRes: string | null;
  icon: string | null;
  iconRes: string | null;
  handler: (() => void) | null;
  type: string;
}

export interface LogLevel {
  value: string;
}

export interface ShakeFile {
  name: string;
  path: string;
}

export interface ShakeReportConfiguration {
  blackBoxData: boolean;
  activityHistoryData: boolean;
  screenshot: boolean;
  video: boolean;
  showReportSentMessage: boolean;
}

export interface NetworkRequest {
  url: string;
  method: string;
  requestBody: string;
  responseBody: string;
  requestHeaders: { [key: string]: string };
  responseHeaders: { [key: string]: string };
  statusCode: string;
  duration: number;
  timestamp: string;
}

export interface NotificationEvent {
  id: string;
  title: string;
  description: string;
}

export interface ChatNotification {
  id: string;
  userId: string;
  title: string;
  message: string;
}

export interface ShakeStartOptions {
  apiKey: string;
}

export interface RegisterUserOptions {
  userId: string;
}

export interface LogOptions {
  logLevel: LogLevel;
  message: string;
}

export interface CapacitorShakePlugin {
  start(options: ShakeStartOptions): Promise<void>;

  show(shakeScreen?: ShakeScreen): void;

  registerUser(options: RegisterUserOptions): void;
}
