import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import 'dayjs/locale/zh-cn'

dayjs.extend(quarterOfYear)
dayjs.locale('zh-cn')

export const useDayjs = dayjs
