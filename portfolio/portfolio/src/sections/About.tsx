import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import Image from "next/image";
import bookImage from '@/assets/images/book-cover.png';

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me" 
        title="A Glimpse Into My World" 
        description="Learn more about who I am, why I do, and what inspires me"
      />

      <div>
        <Card>
          <StarIcon />
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspectives.</p>
        </Card>
      </div>
      <Image src={bookImage} alt="Book cover" />

      <Card>
          <StarIcon />
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspectives.</p>
        </Card>
      </div>
      <Image src={bookImage} alt="Book cover" />

    </div>
  );
};
