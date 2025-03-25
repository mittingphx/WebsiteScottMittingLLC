import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Clock, Calendar } from "lucide-react";
import mediaData from "@/data/media.json";
import { VideoItem } from "@/types";

export function MediaSection() {
  const [activeTab, setActiveTab] = useState("videos");
  const [visibleItems, setVisibleItems] = useState(6);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  const displayedVideos = mediaData.videos.slice(0, visibleItems);

  return (
    <section id="media" className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Media Hub</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Videos, podcasts, and creative projects
          </p>
        </div>
        
        {/* Tabs */}
        <div className="max-w-5xl mx-auto mb-10">
          <Tabs defaultValue="videos" value={activeTab} onValueChange={setActiveTab}>
            <div className="border-b border-gray-200 dark:border-gray-700">
              <TabsList className="flex justify-center space-x-8 bg-transparent">
                <TabsTrigger 
                  value="videos" 
                  className={`border-b-2 whitespace-nowrap py-4 px-1 font-medium text-sm ${
                    activeTab === "videos" 
                      ? "border-primary-500 text-primary-600 dark:text-primary-400" 
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger 
                  value="music" 
                  className={`border-b-2 whitespace-nowrap py-4 px-1 font-medium text-sm ${
                    activeTab === "music" 
                      ? "border-primary-500 text-primary-600 dark:text-primary-400" 
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Music
                </TabsTrigger>
                <TabsTrigger 
                  value="presentations" 
                  className={`border-b-2 whitespace-nowrap py-4 px-1 font-medium text-sm ${
                    activeTab === "presentations" 
                      ? "border-primary-500 text-primary-600 dark:text-primary-400" 
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Presentations
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="videos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {displayedVideos.map((video: VideoItem) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
              
              {/* Load more button */}
              {mediaData.videos.length > visibleItems && (
                <div className="mt-12 text-center">
                  <Button 
                    variant="outline"
                    onClick={handleLoadMore}
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="music" className="mt-6">
              <div className="text-center p-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">Music content coming soon. Stay tuned!</p>
              </div>
            </TabsContent>

            <TabsContent value="presentations" className="mt-6">
              <div className="text-center p-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">Presentation content coming soon. Stay tuned!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

interface VideoCardProps {
  video: VideoItem;
}

function VideoCard({ video }: VideoCardProps) {
  const handlePlay = () => {
    // In a real implementation, this would open a modal or player with the video
    alert(`Playing video: ${video.title}`);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
        {/* Video placeholder */}
        <div className="w-full h-full flex items-center justify-center relative">
          <img 
            src={video.thumbnail} 
            alt={`${video.title} thumbnail`} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              variant="outline"
              onClick={handlePlay}
              className="w-16 h-16 rounded-full bg-white/30 dark:bg-black/30 flex items-center justify-center backdrop-blur-sm border-none"
            >
              <Play className="h-8 w-8 text-white fill-white" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{video.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {video.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {video.duration}
          </span>
          <span className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {video.date}
          </span>
        </div>
      </div>
    </div>
  );
}
