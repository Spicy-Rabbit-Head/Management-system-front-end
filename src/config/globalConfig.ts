// API白名单
export const whiteListApi: Array<string> = [
  'loginRelated/login',
  'loginRelated/register',
]

// 路由白名单
export const whiteListRouter: Array<string> = [
  'Login',
  'BasicLogin',
  'LoginMimicry',
  'NullException',
  'RootPath'
]

// 排定时间字段
export interface SchedulingTimeField {
  label: string,

  value: string
}

// 排定时间列表
export const schedulingTimeList: Array<SchedulingTimeField> = [
  {
    label: "上午",
    value: "上午"
  },
  {
    label: "下午",
    value: "下午"
  },
  {
    label: "全天",
    value: "全天"
  }
]

// 车间
export const workshopList: Array<string> = [
  "製造一部車間",
  "製造二部車間",
  "製造三部車間",
  "檢驗加工部車間"
]


