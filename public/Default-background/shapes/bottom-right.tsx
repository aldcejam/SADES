"use client"
import { styled } from "@mui/material";

export const BottomRight = () => {
    const Style = styled("div")`
    position: absolute;
    bottom: -220px;
    right: -120px;
    width: clamp(700px,70vw, 800px);
    z-index: 3;
    .cls-1 {
      fill: ${({ theme }) => theme.palette.primary.main}a1;
    }
    .cls-2 {
      fill: ${({ theme }) => theme.palette.background.paper};
      filter: ${(props) =>
            props.theme.palette.mode === "dark"
                ? "drop-shadow( 3px 3px 4px rgba(0, 0, 0, .7))"
                : "drop-shadow( 3px 3px 4px #808080ad)"};
    }
    .cls-3 {
        stroke-miterlimit: 10;
        stroke: #686868;
        stroke-width: 0.4px;
        fill: none;
    }
  `;
    return (
        <Style>
            <svg viewBox="0 0 736.31 401.38">
                <g id="Camada_2" data-name="Camada 2">
                    <g id="BACKGROUND">
                        <path
                            className="cls-1"
                            d="M0,210.3s56.38-76.49,100.88-51C163,194.92,210.18,41,309.81,90.87S464-37.28,485.49,55.81,535.21-44.83,624.9,35.94L597,278.91Z"
                        />
                        <path
                            className="cls-2"
                            d="M699.75,40.85S639.82,189,551.34,82.17s-72.19,121.77-174.4,46.5S282.65,252.61,204.1,180.16,156.38,364.92,75.85,312.39l660.46,89Z"
                        />
                        <path
                            className="cls-3"
                            d="M176.48,245.58s-57.22-133,63.1-125.12S277.7-66.67,430.67,24.39,504.34-56.77,615.3,34.1"
                        />
                        <path
                            className="cls-3"
                            d="M177.53,246.59S121.7,113,241.41,121.86,280.85-63.57,431.6,28.26c150.79,92,74.3-82.56,184.13,8.56"
                        />
                        <path
                            className="cls-3"
                            d="M178.58,247.61s-54.43-134.08,64.65-124.34S284-60.47,432.52,32.13c148.62,93,75-84,183.64,7.41"
                        />
                        <path
                            className="cls-3"
                            d="M179.63,248.62s-53-134.58,65.42-123.95S287.16-57.37,433.44,36C579.89,129.91,509-49.38,616.6,42.25"
                        />
                        <path
                            className="cls-3"
                            d="M180.68,249.64S129,114.54,246.87,126.07s43.45-180.34,187.5-86.2C578.64,134.73,510.61-46.92,617,45"
                        />
                        <path
                            className="cls-3"
                            d="M181.73,250.65S131.48,115,248.7,127.48,293.47-51.17,435.29,43.74c142.1,95.81,76.89-88.19,182.17,3.95"
                        />
                        <path
                            className="cls-3"
                            d="M182.78,251.67s-48.85-136.13,67.74-122.79,46.31-177.24,185.7-81.27C576.34,144.07,513.75-42,617.89,50.4"
                        />
                        <path
                            className="cls-3"
                            d="M183.82,252.68S136.37,116,252.34,130.29,300-45.3,437.14,51.47c138,97.38,78.18-91,181.18,1.65"
                        />
                        <path
                            className="cls-3"
                            d="M184.87,253.7s-46.05-137.16,69.3-122,49-173.92,183.9-76.35c135.84,98.29,78.82-92.41,180.68.5"
                        />
                        <path
                            className="cls-3"
                            d="M185.92,254.71S141.26,117.05,256,133.09s50.4-172.26,183-73.88c133.7,99.2,79.47-93.81,180.19-.65"
                        />
                        <path
                            className="cls-3"
                            d="M187,255.73S143.71,117.55,257.81,134.5s51.77-170.6,182.1-71.42C571.48,163.19,520-32.14,619.62,61.27"
                        />
                        <path
                            className="cls-3"
                            d="M188,256.74S146.15,118.05,259.63,135.9,312.76-33,440.84,67c129.42,101,80.75-96.63,179.21-3"
                        />
                        <path
                            className="cls-3"
                            d="M189.07,257.76S148.6,118.55,261.46,137.3,316-30,441.76,70.82c127.28,102,81.4-98,178.72-4.11"
                        />
                        <path
                            className="cls-3"
                            d="M190.12,258.77S151,119.05,263.28,138.71s55.85-165.6,179.41-64c125.14,102.87,82-99.44,178.22-5.27"
                        />
                        <path
                            className="cls-3"
                            d="M191.17,259.79S153.49,119.55,265.1,140.11,322.32-23.81,443.61,78.55c123,103.8,82.69-100.84,177.73-6.41"
                        />
                        <path
                            className="cls-3"
                            d="M192.22,260.8s-36.29-140.74,74.71-119.28S325.5-20.73,444.54,82.42c120.85,104.73,83.33-102.25,177.23-7.56"
                        />
                        <path
                            className="cls-3"
                            d="M193.27,261.82s-34.89-141.26,75.48-118.9S328.69-17.64,445.46,86.29C564.17,192,529.44-17.36,622.2,77.57"
                        />
                        <path
                            className="cls-3"
                            d="M194.32,262.83s-33.5-141.77,76.25-118.51,61.3-158.88,175.81-54.16C563,196.75,531-14.9,622.64,80.29"
                        />
                        <path
                            className="cls-3"
                            d="M195.37,263.85s-32.1-142.29,77-118.12S335.05-11.47,447.31,94C561.72,201.56,532.58-12.44,623.07,83"
                        />
                        <path
                            className="cls-3"
                            d="M196.42,264.86s-30.71-142.8,77.8-117.73,64-155.51,174-49.23C560.5,206.36,534.15-10,623.5,85.72"
                        />
                        <path
                            className="cls-3"
                            d="M197.47,265.88S168.16,122.56,276,148.53,341.41-5.29,449.16,101.77C559.28,211.17,535.72-7.51,623.93,88.44"
                        />
                        <path
                            className="cls-3"
                            d="M198.51,266.89S170.6,123.06,277.86,149.94s66.73-152.13,172.22-44.3C558.05,216,537.29-5,624.36,91.16"
                        />
                        <path
                            className="cls-3"
                            d="M199.56,267.91s-26.51-144.34,80.13-116.57S347.76.91,451,109.5C556.82,220.8,538.85-2.59,624.79,93.87"
                        />
                        <path
                            className="cls-3"
                            d="M200.61,268.92s-25.12-144.85,80.9-116.17S350.93,4,451.93,113.37C555.59,225.62,540.42-.12,625.22,96.59"
                        />
                        <path
                            className="cls-3"
                            d="M201.66,269.94s-23.72-145.37,81.67-115.79,70.77-147,169.52-36.91C554.36,230.44,542,2.34,625.66,99.31"
                        />
                        <path
                            className="cls-3"
                            d="M202.71,271s-22.33-145.88,82.44-115.4,72.12-145.33,168.63-34.44C553.13,235.26,543.56,4.8,626.09,102"
                        />
                        <path
                            className="cls-3"
                            d="M203.76,272S182.83,125.57,287,157,360.44,13.33,454.7,125c97.19,115.11,90.43-117.72,171.82-20.24"
                        />
                        <path
                            className="cls-3"
                            d="M204.81,273s-19.54-146.91,84-114.62,74.8-141.92,166.83-29.51C550.65,244.92,546.7,9.73,627,107.46"
                        />
                        <path
                            className="cls-3"
                            d="M205.86,274s-18.14-147.42,84.76-114.24,76.15-140.21,165.93-27c92.86,117,91.72-120.53,170.83-22.55"
                        />
                        <path
                            className="cls-3"
                            d="M206.91,275s-16.75-147.93,85.54-113.84,77.48-138.5,165-24.59c90.68,118,92.36-121.93,170.33-23.69"
                        />
                        <path
                            className="cls-3"
                            d="M208,276s-15.35-148.45,86.31-113.46S373.08,25.79,458.4,140.45c88.52,119,93-123.34,169.85-24.84"
                        />
                        <path
                            className="cls-3"
                            d="M209,277s-14-149,87.08-113.06,80.14-135.07,163.23-19.66c86.35,119.93,93.66-124.74,169.36-26"
                        />
                        <path
                            className="cls-3"
                            d="M210.06,278.06S197.5,128.58,297.91,165.38,379.38,32,460.25,148.19C544.41,269.09,554.54,22,629.11,121"
                        />
                        <path
                            className="cls-3"
                            d="M211.11,279.07s-11.17-150,88.63-112.29,82.79-131.63,161.43-14.72c82,121.87,94.94-127.56,168.37-28.3"
                        />
                        <path
                            className="cls-3"
                            d="M212.16,280.09s-9.77-150.5,89.4-111.9S385.68,38.28,462.1,155.93C541.9,278.77,557.68,27,630,126.47"
                        />
                        <path
                            className="cls-3"
                            d="M213.2,281.1s-8.37-151,90.18-111.51S388.82,41.41,463,159.8c77.61,123.82,96.23-130.37,167.38-30.61"
                        />
                        <path
                            className="cls-3"
                            d="M214.25,282.12s-7-151.53,91-111.13S392,44.53,464,163.66c75.41,124.8,96.87-131.77,166.88-31.75"
                        />
                        <path
                            className="cls-3"
                            d="M215.3,283.13s-5.58-152,91.73-110.73,88.06-124.74,157.84-4.87c73.22,125.78,97.52-133.18,166.4-32.91"
                        />
                        <path
                            className="cls-3"
                            d="M216.35,284.15s-4.19-152.56,92.5-110.35,89.37-123,156.94-2.4c71,126.76,98.17-134.58,165.91-34.06"
                        />
                        <path
                            className="cls-3"
                            d="M217.4,285.16s-2.79-153.07,93.28-110,90.66-121.29,156,.06c68.82,127.73,98.81-136,165.41-35.21"
                        />
                        <path
                            className="cls-3"
                            d="M218.45,286.18s-1.4-153.58,94.05-109.57,92-119.56,155.14,2.53c66.61,128.71,99.46-137.4,164.92-36.37"
                        />
                        <path
                            className="cls-3"
                            d="M219.5,287.19s0-154.09,94.82-109.18,93.26-117.82,154.25,5C533,312.7,568.67,44.21,633,145.49"
                        />
                        <path
                            className="cls-3"
                            d="M220.55,288.2s1.39-154.6,95.59-108.78,94.56-116.1,153.35,7.46c62.18,130.67,100.74-140.21,163.93-38.67"
                        />
                        <path
                            className="cls-3"
                            d="M221.6,289.22S224.39,134.1,318,180.82s95.84-114.37,152.45,9.93c60,131.65,101.38-141.62,163.43-39.83"
                        />
                        <path
                            className="cls-3"
                            d="M222.65,290.23s4.18-155.63,97.14-108,97.12-112.65,151.55,12.38c57.74,132.64,102-143,163-41"
                        />
                        <path
                            className="cls-3"
                            d="M223.7,291.25s5.58-156.15,97.91-107.62S420,72.71,472.26,198.48C527.77,332.1,574.94,54.06,634.72,156.36"
                        />
                        <path
                            className="cls-3"
                            d="M224.75,292.26s7-156.65,98.69-107.23,99.68-109.19,149.75,17.32c53.27,134.6,103.32-145.83,162-43.27"
                        />
                        <path
                            className="cls-3"
                            d="M225.8,293.28s8.37-157.17,99.46-106.84S426.21,79,474.11,206.22c51,135.58,104-147.24,161.47-44.43"
                        />
                        <path
                            className="cls-3"
                            d="M226.85,294.29s9.76-157.68,100.23-106.45,102-105.66,148,22.25c48.57,136.64,104.61-148.65,161-45.58"
                        />
                        <path
                            className="cls-3"
                            d="M227.89,295.31s11.17-158.2,101-106.07S432.25,85.28,476,214c46.4,137.58,105.26-150,160.48-46.73"
                        />
                        <path
                            className="cls-3"
                            d="M228.94,296.32S241.5,137.61,330.73,190.65,435.4,88.38,476.89,217.83c44.22,138.53,105.9-151.46,160-47.89"
                        />
                        <path
                            className="cls-3"
                            d="M230,297.34s14-159.23,102.56-105.29,106-100.57,145.26,29.64c42.05,139.49,106.55-152.86,159.5-49"
                        />
                    </g>
                </g>
            </svg>
        </Style>
    );
};
