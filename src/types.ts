import type { App } from 'vue'
import type { Router, RouteRecordRaw } from 'vue-router'

export interface context { app: App<Element>, router: Router, routes: Readonly<RouteRecordRaw[]> }
export type UserModule = (ctx: context) => void
