/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ScreenId = 'home' | 'work' | 'info' | 'contact' | 'work-categorized';

export interface Project {
  id: string;
  title: string;
  category: 'Brand Identity' | 'Print & Editorial';
  client: string;
  description: string;
  tags: string[];
  imageUrl: string;
  year: string;
}

export interface Client {
  name: string;
  logoUrl: string;
  altText: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  steps: string[];
}
