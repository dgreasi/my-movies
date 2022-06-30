import React from 'react';
import { Box } from '~components';
import EntityTitle from '~screens/Entity/components/EntityTitle';
import EntityDescription from '~screens/Entity/components/EntityDescription';
import { IEntity } from '~interfaces/entity.interface';
import { FULL_WIDTH } from '~config/constants';
import EntityRating from '~screens/Entity/components/EntityRating';

interface Props {
  entity: IEntity;
}

const EntitySheetDetails = ({ entity }: Props) => {
  return (
    <Box paddingHorizontal="m" paddingBottom="m" width={FULL_WIDTH}>
      <EntityTitle entity={entity} />
      {entity?.imDbRating?.length > 0 && <EntityRating rating={entity.imDbRating} votes={entity.imDbRatingVotes} />}
      <EntityDescription description={entity?.plot || entity?.description || ''} />
    </Box>
  );
};

export default EntitySheetDetails;
