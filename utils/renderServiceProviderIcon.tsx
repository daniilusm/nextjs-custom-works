import { ServiceProviders } from 'models/serviceProviders/types';
import { IconProps, icons as appIcons } from 'styles/icons';
import { StyledComponent } from 'styled-components';
import React from 'react';
import { ViewportShorthands } from 'styles/media';
import * as S from 'components/ServiceProviderHeader/Header.styled';

export const simpleServiceIcons: ServiceIcons<ServiceProviders> = {
  plumbing: { icon: appIcons.plumbingProvider, height: { m: 42, t: 55 } },
  electricity: {
    icon: appIcons.electricityProvider,
    height: { m: 42, t: 55 },
  },
  lender: {
    icon: appIcons.lenderProvider,
    height: { m: 42, t: 55 },
  },
  agent: {
    icon: appIcons.agentProvider,
    height: { m: 42, t: 55 },
  },
  handyman: {
    icon: appIcons.handymanProvider,
    height: { m: 42, t: 55 },
  },
  landscaper: {
    icon: appIcons.landscaperProvider,
    height: { m: 42, t: 55 },
  },
  hvac: {
    icon: appIcons.hvacProvider,
    height: { m: 42, t: 55 },
  },
  other: {
    icon: appIcons.customProvider,
    height: { m: 42, t: 55 },
  },
};

type ServiceIcons<T extends string = string> = PartialRecord<
  T,
  {
    icon: StyledComponent<React.FunctionComponent<IconProps>, any>;
    height: ViewportShorthands;
  }
>;

export const renderIcon = (icons: ServiceIcons, key: string) => {
  if (!icons[key]) return null;
  const { height, icon: Icon } = icons[key]!;

  return (
    <S.Icon>
      <Icon height={height} color="orangeLinear" />
    </S.Icon>
  );
};
