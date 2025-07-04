import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface VideoCardProps {
  title: string;
  description: string;
  url: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, url }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      <video controls className="w-full rounded">
        <source src={url} type="video/mp4" />
      </video>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default VideoCard;
