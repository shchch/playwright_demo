import * as allure from 'allure-js-commons';
import type { Severity } from 'allure-js-commons';

interface AllureMetadata {
  epic?: string;
  feature?: string;
  owner?: string;
  severity?: Severity;
}

export async function setAllureMetadata(metadata: AllureMetadata) {
  if (metadata.epic) await allure.epic(metadata.epic);
  if (metadata.feature) await allure.feature(metadata.feature);
  if (metadata.owner) await allure.owner(metadata.owner);
  if (metadata.severity) await allure.severity(metadata.severity);
  }
