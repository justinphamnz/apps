// Copyright 2017-2020 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Proposal } from '@polkadot/types/interfaces';

import { registry } from '@polkadot/react-api';

export default function isTreasuryProposalVote (proposal?: Proposal | null): boolean {
  if (!proposal) {
    return false;
  }

  const { method, section } = registry.findMetaCall(proposal.callIndex);

  return section === 'treasury' &&
    ['approveProposal', 'rejectProposal'].includes(method) &&
    !!proposal.args[0];
}