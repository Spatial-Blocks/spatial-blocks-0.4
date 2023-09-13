// Define a type for 3D objects
export type ThreeDObject = {
    id: string;
    type: 'cube' | 'sphere' | 'cone' | 'custom';
    position: {
        x: number;
        y: number;
        z: number;
    };
    size: {
        width: number;
        height: number;
        depth?: number; // Optional for non-cuboid shapes
    };
    color: string;
};

// Define a type for coding blocks
export type CodingBlock = {
    id: string;
    type: 'loop' | 'condition' | 'action';
    content: string;
};

// Any other types or interfaces can be added here
