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
import { Route as AppSettingsImport } from './routes/_app/settings'
import { Route as AppProfileImport } from './routes/_app/profile'
import { Route as AppChatImport } from './routes/_app/chat'
import { Route as AppProfileIndexImport } from './routes/_app/profile/index'
import { Route as AppFilesIndexImport } from './routes/_app/files/index'
import { Route as AppChatIndexImport } from './routes/_app/chat/index'
import { Route as AppProfileBillingImport } from './routes/_app/profile/billing'
import { Route as AppChatIdImport } from './routes/_app/chat/$id'

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

const AppSettingsRoute = AppSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => AppRoute,
} as any)

const AppProfileRoute = AppProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AppRoute,
} as any)

const AppChatRoute = AppChatImport.update({
  id: '/chat',
  path: '/chat',
  getParentRoute: () => AppRoute,
} as any)

const AppProfileIndexRoute = AppProfileIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppProfileRoute,
} as any)

const AppFilesIndexRoute = AppFilesIndexImport.update({
  id: '/files/',
  path: '/files/',
  getParentRoute: () => AppRoute,
} as any)

const AppChatIndexRoute = AppChatIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppChatRoute,
} as any)

const AppProfileBillingRoute = AppProfileBillingImport.update({
  id: '/billing',
  path: '/billing',
  getParentRoute: () => AppProfileRoute,
} as any)

const AppChatIdRoute = AppChatIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => AppChatRoute,
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
    '/_app/chat': {
      id: '/_app/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof AppChatImport
      parentRoute: typeof AppImport
    }
    '/_app/profile': {
      id: '/_app/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AppProfileImport
      parentRoute: typeof AppImport
    }
    '/_app/settings': {
      id: '/_app/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AppSettingsImport
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
    '/_app/chat/$id': {
      id: '/_app/chat/$id'
      path: '/$id'
      fullPath: '/chat/$id'
      preLoaderRoute: typeof AppChatIdImport
      parentRoute: typeof AppChatImport
    }
    '/_app/profile/billing': {
      id: '/_app/profile/billing'
      path: '/billing'
      fullPath: '/profile/billing'
      preLoaderRoute: typeof AppProfileBillingImport
      parentRoute: typeof AppProfileImport
    }
    '/_app/chat/': {
      id: '/_app/chat/'
      path: '/'
      fullPath: '/chat/'
      preLoaderRoute: typeof AppChatIndexImport
      parentRoute: typeof AppChatImport
    }
    '/_app/files/': {
      id: '/_app/files/'
      path: '/files'
      fullPath: '/files'
      preLoaderRoute: typeof AppFilesIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/profile/': {
      id: '/_app/profile/'
      path: '/'
      fullPath: '/profile/'
      preLoaderRoute: typeof AppProfileIndexImport
      parentRoute: typeof AppProfileImport
    }
  }
}

// Create and export the route tree

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

interface AppProfileRouteChildren {
  AppProfileBillingRoute: typeof AppProfileBillingRoute
  AppProfileIndexRoute: typeof AppProfileIndexRoute
}

const AppProfileRouteChildren: AppProfileRouteChildren = {
  AppProfileBillingRoute: AppProfileBillingRoute,
  AppProfileIndexRoute: AppProfileIndexRoute,
}

const AppProfileRouteWithChildren = AppProfileRoute._addFileChildren(
  AppProfileRouteChildren,
)

interface AppRouteChildren {
  AppChatRoute: typeof AppChatRouteWithChildren
  AppProfileRoute: typeof AppProfileRouteWithChildren
  AppSettingsRoute: typeof AppSettingsRoute
  AppIndexRoute: typeof AppIndexRoute
  AppFilesIndexRoute: typeof AppFilesIndexRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppChatRoute: AppChatRouteWithChildren,
  AppProfileRoute: AppProfileRouteWithChildren,
  AppSettingsRoute: AppSettingsRoute,
  AppIndexRoute: AppIndexRoute,
  AppFilesIndexRoute: AppFilesIndexRoute,
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
  '/chat': typeof AppChatRouteWithChildren
  '/profile': typeof AppProfileRouteWithChildren
  '/settings': typeof AppSettingsRoute
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/': typeof AppIndexRoute
  '/chat/$id': typeof AppChatIdRoute
  '/profile/billing': typeof AppProfileBillingRoute
  '/chat/': typeof AppChatIndexRoute
  '/files': typeof AppFilesIndexRoute
  '/profile/': typeof AppProfileIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AuthRouteWithChildren
  '/settings': typeof AppSettingsRoute
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/': typeof AppIndexRoute
  '/chat/$id': typeof AppChatIdRoute
  '/profile/billing': typeof AppProfileBillingRoute
  '/chat': typeof AppChatIndexRoute
  '/files': typeof AppFilesIndexRoute
  '/profile': typeof AppProfileIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_auth': typeof AuthRouteWithChildren
  '/_app/chat': typeof AppChatRouteWithChildren
  '/_app/profile': typeof AppProfileRouteWithChildren
  '/_app/settings': typeof AppSettingsRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/signup': typeof AuthSignupRoute
  '/_app/': typeof AppIndexRoute
  '/_app/chat/$id': typeof AppChatIdRoute
  '/_app/profile/billing': typeof AppProfileBillingRoute
  '/_app/chat/': typeof AppChatIndexRoute
  '/_app/files/': typeof AppFilesIndexRoute
  '/_app/profile/': typeof AppProfileIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/chat'
    | '/profile'
    | '/settings'
    | '/login'
    | '/signup'
    | '/'
    | '/chat/$id'
    | '/profile/billing'
    | '/chat/'
    | '/files'
    | '/profile/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/settings'
    | '/login'
    | '/signup'
    | '/'
    | '/chat/$id'
    | '/profile/billing'
    | '/chat'
    | '/files'
    | '/profile'
  id:
    | '__root__'
    | '/_app'
    | '/_auth'
    | '/_app/chat'
    | '/_app/profile'
    | '/_app/settings'
    | '/_auth/login'
    | '/_auth/signup'
    | '/_app/'
    | '/_app/chat/$id'
    | '/_app/profile/billing'
    | '/_app/chat/'
    | '/_app/files/'
    | '/_app/profile/'
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
        "/_app/chat",
        "/_app/profile",
        "/_app/settings",
        "/_app/",
        "/_app/files/"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/signup"
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
    "/_app/profile": {
      "filePath": "_app/profile.tsx",
      "parent": "/_app",
      "children": [
        "/_app/profile/billing",
        "/_app/profile/"
      ]
    },
    "/_app/settings": {
      "filePath": "_app/settings.tsx",
      "parent": "/_app"
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
    "/_app/chat/$id": {
      "filePath": "_app/chat/$id.tsx",
      "parent": "/_app/chat"
    },
    "/_app/profile/billing": {
      "filePath": "_app/profile/billing.tsx",
      "parent": "/_app/profile"
    },
    "/_app/chat/": {
      "filePath": "_app/chat/index.tsx",
      "parent": "/_app/chat"
    },
    "/_app/files/": {
      "filePath": "_app/files/index.tsx",
      "parent": "/_app"
    },
    "/_app/profile/": {
      "filePath": "_app/profile/index.tsx",
      "parent": "/_app/profile"
    }
  }
}
ROUTE_MANIFEST_END */
