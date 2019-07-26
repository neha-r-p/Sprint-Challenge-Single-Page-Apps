import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function EpisodeCard({ name, air_date, episode, characters }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          {episode} aired {air_date}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="movie" />
        {characters.length} Characters
      </Card.Content>
    </Card>
  );
}
