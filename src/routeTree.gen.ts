/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as AppImport } from './routes/_app'
import { Route as AppIndexImport } from './routes/_app/index'
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AppChatImport } from './routes/_app/chat'
import { Route as AppAccountImport } from './routes/_app/account'
import { Route as AppChatIndexImport } from './routes/_app/chat/index'
import { Route as AppAccountIndexImport } from './routes/_app/account/index'
import { Route as AppChatIdImport } from './routes/_app/chat/$id'
import { Route as AppAccountSettingsImport } from './routes/_app/account/settings'
import { Route as AppAccountProfileImport } from './routes/_app/account/profile'
import { Route as AppAccountBillingImport } from './routes/_app/account/billing'
import { Route as AppAccountFilesIndexImport } from './routes/_app/account/files/index'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AppIndexRoute = AppIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

const AppChatRoute = AppChatImport.update({
  id: '/chat',
  path: '/chat',
  getParentRoute: () => AppRoute,
} as any)

const AppAccountRoute = AppAccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => AppRoute,
} as any)

const AppChatIndexRoute = AppChatIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppChatRoute,
} as any)

const AppAccountIndexRoute = AppAccountIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppAccountRoute,
} as any)

const AppChatIdRoute = AppChatIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => AppChatRoute,
} as any)

const AppAccountSettingsRoute = AppAccountSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => AppAccountRoute,
} as any)

const AppAccountProfileRoute = AppAccountProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AppAccountRoute,
} as any)

const AppAccountBillingRoute = AppAccountBillingImport.update({
  id: '/billing',
  path: '/billing',
  getParentRoute: () => AppAccountRoute,
} as any)

const AppAccountFilesIndexRoute = AppAccountFilesIndexImport.update({
  id: '/files/',
  path: '/files/',
  getParentRoute: () => AppAccountRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_app/account': {
      id: '/_app/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof AppAccountImport
      parentRoute: typeof AppImport
    }
    '/_app/chat': {
      id: '/_app/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof AppChatImport
      parentRoute: typeof AppImport
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
    '/_app/': {
      id: '/_app/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/account/billing': {
      id: '/_app/account/billing'
      path: '/billing'
      fullPath: '/account/billing'
      preLoaderRoute: typeof AppAccountBillingImport
      parentRoute: typeof AppAccountImport
    }
    '/_app/account/profile': {
      id: '/_app/account/profile'
      path: '/profile'
      fullPath: '/account/profile'
      preLoaderRoute: typeof AppAccountProfileImport
      parentRoute: typeof AppAccountImport
    }
    '/_app/account/settings': {
      id: '/_app/account/settings'
      path: '/settings'
      fullPath: '/account/settings'
      preLoaderRoute: typeof AppAccountSettingsImport
      parentRoute: typeof AppAccountImport
    }
    '/_app/chat/$id': {
      id: '/_app/chat/$id'
      path: '/$id'
      fullPath: '/chat/$id'
      preLoaderRoute: typeof AppChatIdImport
      parentRoute: typeof AppChatImport
    }
    '/_app/account/': {
      id: '/_app/account/'
      path: '/'
      fullPath: '/account/'
      preLoaderRoute: typeof AppAccountIndexImport
      parentRoute: typeof AppAccountImport
    }
    '/_app/chat/': {
      id: '/_app/chat/'
      path: '/'
      fullPath: '/chat/'
      preLoaderRoute: typeof AppChatIndexImport
      parentRoute: typeof AppChatImport
    }
    '/_app/account/files/': {
      id: '/_app/account/files/'
      path: '/files'
      fullPath: '/account/files'
      preLoaderRoute: typeof AppAccountFilesIndexImport
      parentRoute: typeof AppAccountImport
    }
  }
}

// Create and export the route tree

interface AppAccountRouteChildren {
  AppAccountBillingRoute: typeof AppAccountBillingRoute
  AppAccountProfileRoute: typeof AppAccountProfileRoute
  AppAccountSettingsRoute: typeof AppAccountSettingsRoute
  AppAccountIndexRoute: typeof AppAccountIndexRoute
  AppAccountFilesIndexRoute: typeof AppAccountFilesIndexRoute
}

const AppAccountRouteChildren: AppAccountRouteChildren = {
  AppAccountBillingRoute: AppAccountBillingRoute,
  AppAccountProfileRoute: AppAccountProfileRoute,
  AppAccountSettingsRoute: AppAccountSettingsRoute,
  AppAccountIndexRoute: AppAccountIndexRoute,
  AppAccountFilesIndexRoute: AppAccountFilesIndexRoute,
}

const AppAccountRouteWithChildren = AppAccountRoute._addFileChildren(
  AppAccountRouteChildren,
)

interface AppChatRouteChildren {
  AppChatIdRoute: typeof AppChatIdRoute
  AppChatIndexRoute: typeof AppChatIndexRoute
}

const AppChatRouteChildren: AppChatRouteChildren = {
  AppChatIdRoute: AppChatIdRoute,
  AppChatIndexRoute: AppChatIndexRoute,
}

const AppChatRouteWithChildren =
  AppChatRoute._addFileChildren(AppChatRouteChildren)

interface AppRouteChildren {
  AppAccountRoute: typeof AppAccountRouteWithChildren
  AppChatRoute: typeof AppChatRouteWithChildren
  AppIndexRoute: typeof AppIndexRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppAccountRoute: AppAccountRouteWithChildren,
  AppChatRoute: AppChatRouteWithChildren,
  AppIndexRoute: AppIndexRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

interface AuthRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
  AuthSignupRoute: typeof AuthSignupRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthSignupRoute: AuthSignupRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthRouteWithChildren
  '/account': typeof AppAccountRouteWithChildren
  '/chat': typeof AppChatRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/': typeof AppIndexRoute
  '/account/billing': typeof AppAccountBillingRoute
  '/account/profile': typeof AppAccountProfileRoute
  '/account/settings': typeof AppAccountSettingsRoute
  '/chat/$id': typeof AppChatIdRoute
  '/account/': typeof AppAccountIndexRoute
  '/chat/': typeof AppChatIndexRoute
  '/account/files': typeof AppAccountFilesIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AuthRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/': typeof AppIndexRoute
  '/account/billing': typeof AppAccountBillingRoute
  '/account/profile': typeof AppAccountProfileRoute
  '/account/settings': typeof AppAccountSettingsRoute
  '/chat/$id': typeof AppChatIdRoute
  '/account': typeof AppAccountIndexRoute
  '/chat': typeof AppChatIndexRoute
  '/account/files': typeof AppAccountFilesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_auth': typeof AuthRouteWithChildren
  '/_app/account': typeof AppAccountRouteWithChildren
  '/_app/chat': typeof AppChatRouteWithChildren
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/signup': typeof AuthSignupRoute
  '/_app/': typeof AppIndexRoute
  '/_app/account/billing': typeof AppAccountBillingRoute
  '/_app/account/profile': typeof AppAccountProfileRoute
  '/_app/account/settings': typeof AppAccountSettingsRoute
  '/_app/chat/$id': typeof AppChatIdRoute
  '/_app/account/': typeof AppAccountIndexRoute
  '/_app/chat/': typeof AppChatIndexRoute
  '/_app/account/files/': typeof AppAccountFilesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/account'
    | '/chat'
    | '/login'
    | '/signup'
    | '/'
    | '/account/billing'
    | '/account/profile'
    | '/account/settings'
    | '/chat/$id'
    | '/account/'
    | '/chat/'
    | '/account/files'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/login'
    | '/signup'
    | '/'
    | '/account/billing'
    | '/account/profile'
    | '/account/settings'
    | '/chat/$id'
    | '/account'
    | '/chat'
    | '/account/files'
  id:
    | '__root__'
    | '/_app'
    | '/_auth'
    | '/_app/account'
    | '/_app/chat'
    | '/_auth/login'
    | '/_auth/signup'
    | '/_app/'
    | '/_app/account/billing'
    | '/_app/account/profile'
    | '/_app/account/settings'
    | '/_app/chat/$id'
    | '/_app/account/'
    | '/_app/chat/'
    | '/_app/account/files/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
  AuthRoute: typeof AuthRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app",
        "/_auth"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/account",
        "/_app/chat",
        "/_app/"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/signup"
      ]
    },
    "/_app/account": {
      "filePath": "_app/account.tsx",
      "parent": "/_app",
      "children": [
        "/_app/account/billing",
        "/_app/account/profile",
        "/_app/account/settings",
        "/_app/account/",
        "/_app/account/files/"
      ]
    },
    "/_app/chat": {
      "filePath": "_app/chat.tsx",
      "parent": "/_app",
      "children": [
        "/_app/chat/$id",
        "/_app/chat/"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.tsx",
      "parent": "/_auth"
    },
    "/_app/": {
      "filePath": "_app/index.tsx",
      "parent": "/_app"
    },
    "/_app/account/billing": {
      "filePath": "_app/account/billing.tsx",
      "parent": "/_app/account"
    },
    "/_app/account/profile": {
      "filePath": "_app/account/profile.tsx",
      "parent": "/_app/account"
    },
    "/_app/account/settings": {
      "filePath": "_app/account/settings.tsx",
      "parent": "/_app/account"
    },
    "/_app/chat/$id": {
      "filePath": "_app/chat/$id.tsx",
      "parent": "/_app/chat"
    },
    "/_app/account/": {
      "filePath": "_app/account/index.tsx",
      "parent": "/_app/account"
    },
    "/_app/chat/": {
      "filePath": "_app/chat/index.tsx",
      "parent": "/_app/chat"
    },
    "/_app/account/files/": {
      "filePath": "_app/account/files/index.tsx",
      "parent": "/_app/account"
    }
  }
}
ROUTE_MANIFEST_END */
