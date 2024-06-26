// assets
import { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot, IconVariable } from '@tabler/icons'

// constant
const icons = { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot, IconVariable }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //
// 导入国际化
import i18n from 'locale/index'

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'chatflows',
            title: i18n.t('Chatflows'),
            type: 'item',
            url: '/chatflows',
            icon: icons.IconHierarchy,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: i18n.t('Marketplaces'),
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'tools',
            title: i18n.t('Tools'),
            type: 'item',
            url: '/tools',
            icon: icons.IconTool,
            breadcrumbs: true
        },
        {
            id: 'assistants',
            title: 'Assistants',
            type: 'item',
            url: '/assistants',
            icon: icons.IconRobot,
            breadcrumbs: true
        },
        {
            id: 'credentials',
            title: i18n.t('Credentials'),
            type: 'item',
            url: '/credentials',
            icon: icons.IconLock,
            breadcrumbs: true
        },
        {
            id: 'variables',
            title: 'Variables',
            type: 'item',
            url: '/variables',
            icon: icons.IconVariable,
            breadcrumbs: true
        },
        {
            id: 'apikey',
            title: i18n.t('APIKeys'),
            type: 'item',
            url: '/apikey',
            icon: icons.IconKey,
            breadcrumbs: true
        }
    ]
}

export default dashboard
