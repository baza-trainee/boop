interface AnimatedYellowManProps {
  width: string;
}

const AnimatedYellowMan: React.FC<AnimatedYellowManProps> = ({ width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    width={width}
    height={String(Number(width) / 1.101)}
    viewBox="0 0 250 227"
    id="yellowMan"
  >
    <defs>
      <animateMotion
        repeatCount="1"
        restart="whenNotActive"
        dur="2.9696363s"
        begin="yellowMan.mouseover;0s"
        xlinkHref="#_R_G_L_1_G"
        fill="freeze"
        keyTimes="0;0.1725168;0.3994944;0.662809;0.8988764;1"
        path="M71.72 97.99 C73.31,97.4 81.56,91.32 81.22,94.49 C80.89,97.65 69.72,116.99 69.72,116.99 C69.72,116.99 80.89,97.65 81.22,94.49 C81.56,91.32 73.31,97.4 71.72,97.99 C71.72,97.99 71.72,97.99 71.72,97.99 "
        keyPoints="0;0.15;0.5;0.85;1;1"
        keySplines="0.333 0 0.833 0.833;0.167 0.167 0.667 1;0.333 0 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="1"
        restart="whenNotActive"
        dur="2.9696363s"
        begin="yellowMan.mouseover;0s"
        xlinkHref="#_R_G_L_1_G"
        fill="freeze"
        attributeName="transform"
        from="0"
        to="0"
        type="rotate"
        additive="sum"
        keyTimes="0;0.1725168;0.3994944;0.662809;0.8988764;1"
        values="0;-47;-112;-47;0;0"
        keySplines="0.333 0 0.833 0.833;0.167 0.167 0.667 1;0.333 0 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="1"
        restart="whenNotActive"
        dur="2.9696363s"
        begin="yellowMan.mouseover;0s"
        xlinkHref="#_R_G_L_1_G"
        fill="freeze"
        attributeName="transform"
        from="-57.502 -66.833"
        to="-57.502 -66.833"
        type="translate"
        additive="sum"
        keyTimes="0;1"
        values="-57.502 -66.833;-57.502 -66.833"
        keySplines="0 0 1 1"
        calcMode="spline"
      />
      <animateMotion
        repeatCount="1"
        restart="whenNotActive"
        dur="2.9696363s"
        begin="yellowMan.mouseover;0s"
        xlinkHref="#_R_G_L_0_G_D_25_P_0_G_0_T_0"
        fill="freeze"
        keyTimes="0;0.1725168;0.3994944;0.662809;0.8988764;1"
        path="M53.47 80.06 C53.34,80.33 52.86,81.1 52.72,81.68 C52.57,82.27 52.59,83.56 52.59,83.56 C52.59,83.56 52.57,82.27 52.72,81.68 C52.86,81.1 53.34,80.33 53.47,80.06 C53.47,80.06 53.47,80.06 53.47,80.06 "
        keyPoints="0;0.24;0.5;0.76;1;1"
        keySplines="0.333 0 0.833 0.833;0.167 0.167 0.667 1;0.333 0 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0"
        calcMode="spline"
      />
      <animateMotion
        repeatCount="1"
        restart="whenNotActive"
        dur="2.9696363s"
        begin="yellowMan.mouseover;0s"
        xlinkHref="#_R_G_L_0_G_D_26_P_0_G_0_T_0"
        fill="freeze"
        keyTimes="0;0.1725168;0.3994944;0.662809;0.8988764;1"
        path="M66.47 80.06 C66.36,80.37 65.99,81.35 65.84,81.93 C65.69,82.52 65.59,83.56 65.59,83.56 C65.59,83.56 65.69,82.52 65.84,81.93 C65.99,81.35 66.36,80.37 66.47,80.06 C66.47,80.06 66.47,80.06 66.47,80.06 "
        keyPoints="0;0.27;0.5;0.73;1;1"
        keySplines="0.333 0 0.833 0.833;0.167 0.167 0.667 1;0.333 0 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0"
        calcMode="spline"
      />
      <animate
        attributeType="XML"
        attributeName="opacity"
        dur="3s"
        from="0"
        to="1"
        xlinkHref="#time_group"
      />
    </defs>
    <g id="_R_G">
      <g id="_R_G_L_1_G">
        <path
          id="_R_G_L_1_G_D_0_P_0"
          fill="#ffab0b"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M62.25 59.42 C62.25,59.42 56.34,58.87 53.25,56.92 C50.92,55.44 49.88,54.44 48.75,51.92 C47.49,49.06 47.75,45.42 47.75,42.42 C47.75,37.53 48.25,36.3 48.25,31.42 C48.25,28.29 48.68,26.51 48.25,23.42 C47.79,19.99 47.27,18.02 45.75,14.92 C44.4,12.14 43.11,10.38 41.25,7.91 C39.75,5.91 38.88,4 36.75,5.41 C35.25,6.42 35.5,7.91 35.75,8.91 C36.48,11.83 36.75,12.38 36.75,14.92 C33.44,13.94 31.68,12.91 28.25,12.42 C24.78,11.91 22.71,11.76 19.25,12.42 C16.4,12.96 15.25,12.99 12.25,14.92 C9.93,16.4 8.22,17.33 7.25,19.92 C6,23.29 7.4,25.83 9.25,28.92 C10.68,31.28 13.75,33.92 13.75,33.92 C13.75,33.92 15.67,42.55 17.25,47.92 C18.61,52.51 19.19,54.39 20.75,58.92 C23,65.42 24.72,68.48 28.25,73.42 C31.07,77.35 33.04,79.33 36.75,82.42 C40,85.12 41.99,86.49 45.75,88.42 C49.82,90.5 56.75,92.42 56.75,92.42 C56.75,92.42 62.25,76.42 62.25,76.42 C62.25,76.42 62.25,59.42 62.25,59.42z "
        />
        <path
          id="_R_G_L_1_G_D_1_P_0"
          stroke="#50439f"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeWidth="2"
          strokeOpacity="1"
          d=" M32.75 12.91 C32.75,10.38 32.48,9.83 31.75,6.91 C31.5,5.91 31.25,4.41 32.75,3.41 C34.88,2 36.25,3.43 37.75,5.43 C39.61,7.9 40.93,10.14 42.28,12.91 C43.81,16.02 43.79,17.99 44.25,21.41 C44.68,24.51 44.25,26.29 44.25,29.41 C44.25,34.3 43.75,35.53 43.75,40.41 C43.75,43.41 43.49,47.06 44.75,49.92 C45.88,52.44 46.92,53.44 49.25,54.92 C52.34,56.87 58.25,57.42 58.25,57.42 C58.25,57.42 58.25,74.41 58.25,74.41 C58.25,74.41 52.75,90.42 52.75,90.42 C52.75,90.42 45.82,88.5 41.75,86.42 C37.99,84.49 36,83.11 32.75,80.41 C29.04,77.33 27.07,75.35 24.25,71.41 C20.72,66.48 19,63.42 16.75,56.92 C15.19,52.39 14.61,50.51 13.25,45.91 C11.67,40.55 9.75,31.91 9.75,31.91  M32.75 12.91 C34.51,14.87 34.83,15.96 35.75,18.41 C36.65,20.79 36.95,22.01 37.75,24.41 C38.25,25.91 38.71,28.11 37.25,29.41 C35.95,30.59 34.13,30.51 32.75,29.41 C30.25,27.41 30.21,26.45 28.75,24.41 C27.94,23.27 26.75,21.41 26.75,21.41 C26.75,21.41 27.75,26.41 26.75,29.41 C26.32,30.72 25.58,31.54 24.25,31.91 C22.32,32.47 20.75,30.41 19.75,29.41 C18.83,28.49 18.33,27.94 17.5,26.91  M32.75 12.91 C29.44,11.94 27.68,10.91 24.25,10.41 C20.78,9.91 18.71,9.76 15.25,10.41 C12.4,10.96 11.25,10.99 8.25,12.91 C5.93,14.4 4.22,15.33 3.25,17.91 C2,21.29 3.4,23.83 5.25,26.91 C6.67,29.28 9.75,31.91 9.75,31.91  M15.75 23.41 C15.75,23.41 16.63,25.94 17.5,26.91  M17.5 26.91 C17.25,29.46 16.73,31.75 14.25,32.41 C13.12,32.72 9.75,31.91 9.75,31.91 "
        />
      </g>
      <g
        id="_R_G_L_0_G"
        transform=" translate(147.068, 113.072) translate(-87.035, -113.631)"
      >
        <path
          id="_R_G_L_0_G_D_0_P_0"
          fill="#ffab0b"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M128.44 101.63 C123.14,98.09 113.94,94.13 113.94,94.13 C113.94,94.13 113.94,115.13 113.94,115.13 C113.94,115.13 117.44,134.63 117.44,134.63 C117.44,134.63 122.28,137.06 124.44,139.63 C127.04,142.71 127.18,145.31 128.44,149.13 C129.4,152.01 130.07,153.62 130.44,156.63 C130.78,159.34 131.03,160.96 130.44,163.63 C130,165.68 128.88,166.57 128.44,168.63 C127.92,171.11 127.33,172.85 128.44,175.13 C129,176.25 129.26,177.21 130.44,177.63 C132.18,178.24 133.08,176.36 134.44,175.13 C136.66,173.13 138.44,168.63 138.44,168.63 C138.44,168.63 137.41,174.27 138.44,177.63 C139.24,180.22 139.45,182.58 141.94,183.63 C143.56,184.31 144.85,184.37 146.44,183.63 C148.82,182.53 150.44,177.63 150.44,177.63 C150.44,177.63 151.53,180.49 153.44,181.63 C155.63,182.93 157.52,184.38 159.94,183.63 C161.4,183.18 162.16,182.44 162.94,181.13 C164.14,179.12 162.94,175.13 162.94,175.13 C162.94,175.13 164.68,180.16 167.44,181.13 C169.1,181.71 170.54,182.18 171.94,181.13 C173.82,179.72 173.45,177.47 173.45,175.13 C173.45,170.64 172.89,168.02 171.94,163.63 C170.45,156.63 169.68,154.62 167.44,149.13 C165.04,143.22 163.37,140.01 159.94,134.63 C156.36,129 153.74,125.62 149.44,121.13 C149.44,121.13 138.44,109.63 138.44,109.63 C134.15,105.14 132.61,104.4 128.44,101.63z "
        />
        <path
          id="_R_G_L_0_G_D_1_P_0"
          stroke="#50439f"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeWidth="2"
          strokeOpacity="1"
          d=" M159.94 172.13 C159.94,172.13 161.68,177.16 164.44,178.13 C166.1,178.71 167.54,179.18 168.94,178.13 C170.82,176.72 170.45,174.47 170.45,172.13 C170.45,167.64 169.89,165.02 168.94,160.63 C167.45,153.63 166.68,151.62 164.44,146.13 C162.04,140.22 160.37,137.01 156.94,131.63 C153.36,126 150.74,122.62 146.44,118.13 C142.15,113.64 139.74,111.12 135.44,106.63 C131.15,102.14 129.61,101.4 125.44,98.63 C120.14,95.09 110.94,91.13 110.94,91.13 C110.94,91.13 110.94,112.13 110.94,112.13 C110.94,112.13 114.44,131.63 114.44,131.63 C114.44,131.63 119.28,134.06 121.44,136.63 C124.04,139.71 124.18,142.31 125.44,146.13 C126.4,149.01 127.07,150.62 127.44,153.63 C127.78,156.34 128.03,157.96 127.44,160.63 C127,162.68 125.88,163.57 125.44,165.63 C124.92,168.11 124.33,169.85 125.44,172.13 C126,173.25 126.26,174.21 127.44,174.63 C129.18,175.24 130.08,173.36 131.44,172.13 C133.66,170.13 135.44,165.63 135.44,165.63 C135.44,165.63 134.41,171.27 135.44,174.63 C136.24,177.22 136.45,179.58 138.94,180.63 C140.56,181.31 141.85,181.37 143.44,180.63 C145.82,179.53 147.44,174.63 147.44,174.63  M159.94 172.13 C159.94,172.13 156.94,165.63 156.94,165.63  M159.94 172.13 C159.94,172.13 161.14,176.12 159.94,178.13 C159.16,179.44 158.4,180.18 156.94,180.63 C154.52,181.38 152.63,179.93 150.44,178.63 C148.53,177.49 147.44,174.63 147.44,174.63  M147.44 174.63 C147.44,174.63 146.44,168.13 146.44,168.13 "
        />
        <path
          id="_R_G_L_0_G_D_2_P_0"
          fill="#ffab0b"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M106.95 163.63 C106.95,159.65 105.95,152.13 105.95,152.13 C105.95,152.13 87.95,160.63 87.95,160.63 C87.95,160.63 77.45,170.13 77.45,170.13 C77.45,170.13 78.4,179.01 79.45,184.63 C80.27,188.96 80.99,191.33 81.95,195.63 C83.35,201.87 84.01,205.4 85.45,211.63 C86.4,215.74 86.44,218.63 87.95,222.13 C88.45,223.28 88.74,224.33 89.95,224.63 C91.94,225.13 96.05,224.63 99.95,224.63 C99.95,224.63 109.45,224.63 109.45,224.63 C109.45,224.63 120.45,224.63 120.45,224.63 C122.41,224.63 124.62,225.4 125.45,223.63 C125.57,223.38 125.76,223.06 125.45,222.13 C124.76,220.06 122.45,220.52 120.45,219.63 C117.97,218.52 116.3,218.5 113.95,217.13 C112.03,216.01 110.76,215.43 109.45,213.63 C106.7,209.84 107.84,206.3 107.45,201.63 C107.06,196.89 107.45,194.13 107.45,189.63 C107.45,189.63 107.45,178.13 107.45,178.13 C107.45,172.66 106.95,169.13 106.95,163.63z "
        />
        <path
          id="_R_G_L_0_G_D_3_P_0"
          stroke="#50439f"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeWidth="2"
          strokeOpacity="1"
          d=" M103.95 161.63 C103.95,157.65 102.95,150.13 102.95,150.13 C102.95,150.13 84.95,158.63 84.95,158.63 C84.95,158.63 74.45,168.13 74.45,168.13 C74.45,168.13 75.4,177.01 76.45,182.63 C77.27,186.96 77.99,189.33 78.95,193.63 C80.35,199.87 81.01,203.4 82.45,209.63 C83.4,213.74 83.44,216.63 84.95,220.13 C85.45,221.28 85.74,222.33 86.95,222.63 C88.94,223.13 93.05,222.63 96.95,222.63 C96.95,222.63 106.45,222.63 106.45,222.63 C106.45,222.63 117.45,222.63 117.45,222.63 C119.41,222.63 121.62,223.4 122.45,221.63 C122.57,221.38 122.76,221.06 122.45,220.13 C121.76,218.06 119.45,218.52 117.45,217.63 C114.97,216.52 113.3,216.5 110.95,215.13 C109.03,214.01 107.76,213.43 106.45,211.63 C103.7,207.84 104.84,204.3 104.45,199.63 C104.06,194.89 104.45,192.13 104.45,187.63 C104.45,187.63 104.45,176.13 104.45,176.13 C104.45,170.66 103.95,167.13 103.95,161.63z "
        />
        <path
          id="_R_G_L_0_G_D_4_P_0"
          fill="#ffab0b"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M53.44 183.63 C53.93,178.58 54.44,171.13 54.44,171.13 C54.44,171.13 41.44,167.63 41.44,167.63 C41.44,167.63 25.44,155.13 25.44,155.13 C25.44,155.13 25.44,167.63 25.44,167.63 C25.44,167.63 25.44,176.13 25.44,176.13 C25.44,176.13 25.44,190.13 25.44,190.13 C25.44,190.13 25.44,203.63 25.44,203.63 C25.44,203.63 25.44,213.63 25.44,213.63 C25.44,216.13 24.44,216.63 21.44,217.63 C18.1,218.74 17.44,219.13 12.94,220.63 C11.04,221.27 9.94,221.13 8.44,223.13 C7.62,224.22 7.22,225.52 8.44,226.13 C9.44,226.63 11.94,226.63 12.94,226.63 C12.94,226.63 21.44,226.63 21.44,226.63 C21.44,226.63 32.44,226.63 32.44,226.63 C35.96,226.63 40.44,227.01 41.44,226.63 C43.67,225.78 44.83,224.88 46.44,223.13 C49.88,219.4 49.62,212.63 49.94,210.63 C50.27,208.63 51.94,195.63 51.94,195.63 C51.94,195.63 53.02,187.98 53.44,183.63z "
        />
        <path
          id="_R_G_L_0_G_D_5_P_0"
          stroke="#50439f"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeWidth="2"
          strokeOpacity="1"
          d=" M50.44 181.63 C50.93,176.58 51.44,169.13 51.44,169.13 C51.44,169.13 38.44,165.63 38.44,165.63 C38.44,165.63 22.44,153.13 22.44,153.13 C22.44,153.13 22.44,165.63 22.44,165.63 C22.44,165.63 22.44,174.13 22.44,174.13 C22.44,174.13 22.44,188.13 22.44,188.13 C22.44,188.13 22.44,201.63 22.44,201.63 C22.44,201.63 22.44,211.63 22.44,211.63 C22.44,214.13 21.44,214.63 18.44,215.63 C15.1,216.74 14.44,217.13 9.94,218.63 C8.04,219.27 6.94,219.13 5.44,221.13 C4.62,222.22 4.22,223.52 5.44,224.13 C6.44,224.63 8.94,224.63 9.94,224.63 C9.94,224.63 18.44,224.63 18.44,224.63 C18.44,224.63 29.44,224.63 29.44,224.63 C32.96,224.63 37.44,225.01 38.44,224.63 C40.67,223.78 41.83,222.88 43.44,221.13 C46.88,217.4 46.62,210.63 46.94,208.63 C47.27,206.63 48.94,193.63 48.94,193.63 C48.94,193.63 50.02,185.98 50.44,181.63z "
        />
        <path
          id="_R_G_L_0_G_D_6_P_0"
          fill="#ffffff"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M112.44 87.13 C109.18,81.82 106.46,79.41 101.94,75.13 C98.12,71.5 95.91,69.43 91.44,66.63 C87.23,63.98 84.69,62.62 79.94,61.13 C74.12,59.3 70.55,59.22 64.44,59.13 C57.57,59.03 53.66,59.64 46.94,61.13 C40.31,62.6 36.42,63.41 30.44,66.63 C24.8,69.66 21.8,71.93 17.44,76.63 C12.73,81.72 10.77,85.3 7.94,91.63 C5.45,97.21 4.45,100.6 3.44,106.63 C2.13,114.53 2,119.26 3.44,127.13 C4.48,132.78 5.43,135.97 7.94,141.13 C11.12,147.66 13.63,151.18 18.94,156.13 C24.34,161.15 28.22,163.11 34.94,166.13 C42.16,169.37 46.59,170.66 54.44,171.63 C60.84,172.42 64.58,172.63 70.94,171.63 C77.65,170.57 81.36,169.16 87.44,166.13 C93.6,163.06 96.74,160.63 101.94,156.13 C106.43,152.24 109.13,150.06 112.44,145.13 C115.57,140.49 116.78,137.47 118.44,132.13 C120.27,126.28 121.01,122.76 120.94,116.63 C120.88,110.91 119.99,107.7 118.47,102.22 C118.47,102.22 118.44,102.13 118.44,102.13 C116.76,96.05 115.75,92.5 112.44,87.13z "
        />
        <path
          id="_R_G_L_0_G_D_7_P_0"
          stroke="#50439f"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeWidth="2"
          strokeOpacity="1"
          d=" M112.44 87.13 C109.18,81.82 106.46,79.41 101.94,75.13 C98.12,71.5 95.91,69.43 91.44,66.63 C87.23,63.98 84.69,62.62 79.94,61.13 C74.12,59.3 70.55,59.22 64.44,59.13 C57.57,59.03 53.66,59.64 46.94,61.13 C40.31,62.6 36.42,63.41 30.44,66.63 C24.8,69.66 21.8,71.93 17.44,76.63 C12.73,81.72 10.77,85.3 7.94,91.63 C5.45,97.21 4.45,100.6 3.44,106.63 C2.13,114.53 2,119.26 3.44,127.13 C4.48,132.78 5.43,135.97 7.94,141.13 C11.12,147.66 13.63,151.18 18.94,156.13 C24.34,161.15 28.22,163.11 34.94,166.13 C42.16,169.37 46.59,170.66 54.44,171.63 C60.84,172.42 64.58,172.63 70.94,171.63 C77.65,170.57 81.36,169.16 87.44,166.13 C93.6,163.06 96.74,160.63 101.94,156.13 C106.43,152.24 109.13,150.06 112.44,145.13 C115.57,140.49 116.78,137.47 118.44,132.13 C120.27,126.28 121.01,122.76 120.94,116.63 C120.88,110.91 119.99,107.7 118.47,102.22 C118.47,102.22 118.44,102.13 118.44,102.13 C116.76,96.05 115.75,92.5 112.44,87.13z "
        />
        <path
          id="_R_G_L_0_G_D_8_P_0"
          fill="#ffab0b"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M114.44 89.13 C111.18,83.82 108.46,81.41 103.94,77.13 C100.12,73.5 97.91,71.43 93.44,68.63 C89.23,65.98 86.69,64.62 81.94,63.13 C76.12,61.3 72.55,61.22 66.44,61.13 C59.57,61.03 55.66,61.64 48.94,63.13 C42.31,64.6 38.42,65.41 32.44,68.63 C26.8,71.66 23.8,73.93 19.44,78.63 C14.73,83.72 12.77,87.3 9.94,93.63 C7.45,99.21 6.45,102.6 5.44,108.63 C4.13,116.53 4,121.26 5.44,129.13 C6.48,134.78 7.43,137.97 9.94,143.13 C13.12,149.66 15.63,153.18 20.94,158.13 C26.34,163.15 30.22,165.11 36.94,168.13 C44.16,171.37 48.59,172.66 56.44,173.63 C62.84,174.42 66.58,174.63 72.94,173.63 C79.65,172.57 83.36,171.16 89.44,168.13 C95.6,165.06 98.74,162.63 103.94,158.13 C108.43,154.24 111.13,152.06 114.44,147.13 C117.57,142.49 118.78,139.47 120.44,134.13 C122.27,128.28 123.01,124.76 122.94,118.63 C122.88,112.91 121.99,109.7 120.47,104.22 C120.47,104.22 120.44,104.13 120.44,104.13 C118.76,98.05 117.75,94.5 114.44,89.13z "
        />
        <path
          id="_R_G_L_0_G_D_9_P_0"
          stroke="#50439f"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeWidth="2"
          strokeOpacity="1"
          d=" M112.44 87.13 C109.18,81.82 106.46,79.41 101.94,75.13 C98.12,71.5 95.91,69.43 91.44,66.63 C87.23,63.98 84.69,62.62 79.94,61.13 C74.12,59.3 70.55,59.22 64.44,59.13 C57.57,59.03 53.66,59.64 46.94,61.13 C40.31,62.6 36.42,63.41 30.44,66.63 C24.8,69.66 21.8,71.93 17.44,76.63 C12.73,81.72 10.77,85.3 7.94,91.63 C5.45,97.21 4.45,100.6 3.44,106.63 C2.13,114.53 2,119.26 3.44,127.13 C4.48,132.78 5.43,135.97 7.94,141.13 C11.12,147.66 13.63,151.18 18.94,156.13 C24.34,161.15 28.22,163.11 34.94,166.13 C42.16,169.37 46.59,170.66 54.44,171.63 C60.84,172.42 64.58,172.63 70.94,171.63 C77.65,170.57 81.36,169.16 87.44,166.13 C93.6,163.06 96.74,160.63 101.94,156.13 C106.43,152.24 109.13,150.06 112.44,145.13 C115.57,140.49 116.78,137.47 118.44,132.13 C120.27,126.28 121.01,122.76 120.94,116.63 C120.88,110.91 119.99,107.7 118.47,102.22 C118.47,102.22 118.44,102.13 118.44,102.13 C116.76,96.05 115.75,92.5 112.44,87.13z "
        />
        <path
          id="_R_G_L_0_G_D_10_P_0"
          fill="#50439f"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M56.42 104.65 C55.99,105.09 55.98,105.8 56.45,106.21 C58.88,108.32 61.89,109.65 65.1,110.02 C68.68,110.44 72.3,109.63 75.37,107.73 C78.43,105.83 80.77,102.96 81.99,99.56 C83.09,96.52 83.24,93.23 82.43,90.12 C82.28,89.52 81.64,89.2 81.05,89.4 C80.46,89.6 80.15,90.23 80.3,90.83 C80.95,93.46 80.81,96.24 79.88,98.8 C78.83,101.72 76.82,104.19 74.19,105.82 C71.55,107.46 68.44,108.15 65.36,107.79 C62.65,107.48 60.11,106.37 58.04,104.62 C57.57,104.22 56.86,104.21 56.42,104.65z "
        />
        <path
          id="_R_G_L_0_G_D_11_P_0"
          fill="#e93405"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M113.85 86.2 C113.85,86.2 83.29,85.73 59.37,58.68 C58.86,58.83 117.47,13.09 117.47,13.09 C117.47,13.09 113.85,86.2 113.85,86.2 C113.85,86.2 113.85,86.2 113.85,86.2z "
        />
        <path
          id="_R_G_L_0_G_D_12_P_0"
          fill="#fffcf5"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M85.38 50.56 C85.38,50.56 81.22,53.58 81.22,53.58 C81.22,53.58 76.29,51.94 76.29,51.94 C76.29,51.94 77.98,56.74 77.98,56.74 C77.98,56.74 74.88,60.79 74.88,60.79 C74.88,60.79 80.09,60.73 80.09,60.73 C80.09,60.73 83.11,64.88 83.11,64.88 C83.11,64.88 84.63,60.04 84.63,60.04 C84.63,60.04 89.59,58.56 89.59,58.56 C89.59,58.56 85.33,55.63 85.33,55.63 C85.33,55.63 85.38,50.56 85.38,50.56z "
        />
        <path
          id="_R_G_L_0_G_D_13_P_0"
          fill="#fffcf5"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M116.67 26.81 C116.67,26.81 116.79,26.72 116.79,26.72 C116.79,26.72 116.38,35.12 116.38,35.12 C116.38,35.12 115.53,33.97 115.53,33.97 C115.53,33.97 110.33,34.02 110.33,34.02 C110.33,34.02 113.42,29.97 113.42,29.97 C113.42,29.97 111.73,25.16 111.73,25.16 C111.73,25.16 116.67,26.81 116.67,26.81z "
        />
        <path
          id="_R_G_L_0_G_D_14_P_0"
          fill="#fffcf5"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M102.29 33.51 C102.29,33.51 100.29,34.97 100.29,34.97 C100.29,34.97 97.92,34.18 97.92,34.18 C97.92,34.18 98.74,36.49 98.74,36.49 C98.74,36.49 97.24,38.43 97.24,38.43 C97.24,38.43 99.75,38.41 99.75,38.41 C99.75,38.41 101.2,40.4 101.2,40.4 C101.2,40.4 101.93,38.08 101.93,38.08 C101.93,38.08 104.31,37.36 104.31,37.36 C104.31,37.36 102.27,35.95 102.27,35.95 C102.27,35.95 102.29,33.51 102.29,33.51z "
        />
        <path
          id="_R_G_L_0_G_D_15_P_0"
          fill="#fffcf5"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M109.6 52.82 C109.6,52.82 107.61,54.27 107.61,54.27 C107.61,54.27 105.24,53.48 105.24,53.48 C105.24,53.48 106.05,55.78 106.05,55.78 C106.05,55.78 104.56,57.73 104.56,57.73 C104.56,57.73 107.06,57.71 107.06,57.71 C107.06,57.71 108.52,59.7 108.52,59.7 C108.52,59.7 109.25,57.38 109.25,57.38 C109.25,57.38 111.63,56.66 111.63,56.66 C111.63,56.66 109.59,55.25 109.59,55.25 C109.59,55.25 109.6,52.82 109.6,52.82z "
        />
        <path
          id="_R_G_L_0_G_D_16_P_0"
          fill="#fffcf5"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M103.87 72.79 C103.87,72.79 101.88,74.23 101.88,74.23 C101.88,74.23 99.5,73.44 99.5,73.44 C99.5,73.44 100.32,75.75 100.32,75.75 C100.32,75.75 98.83,77.69 98.83,77.69 C98.83,77.69 101.33,77.67 101.33,77.67 C101.33,77.67 102.78,79.66 102.78,79.66 C102.78,79.66 103.52,77.34 103.52,77.34 C103.52,77.34 105.89,76.63 105.89,76.63 C105.89,76.63 103.85,75.22 103.85,75.22 C103.85,75.22 103.87,72.79 103.87,72.79z "
        />
        <path
          id="_R_G_L_0_G_D_17_P_0"
          fill="#3d3d3d"
          fillOpacity="0.3"
          fillRule="nonzero"
          d=" M59.37 58.68 C58.9,58.83 110.02,18.92 116.73,13.67 C116.99,13.75 117.23,13.81 117.43,13.87 C117.43,13.87 117.05,21.52 117.05,21.52 C116.24,21.19 115.38,20.84 114.5,20.44 C109.05,17.93 100.44,31.24 89.06,42.57 C78.47,53.11 70.44,65.8 114.3,77 C114.3,77 113.84,86.22 113.84,86.22 C113.84,86.22 83.28,85.74 59.36,58.69 C59.36,58.69 59.37,58.68 59.37,58.68z "
        />
        <path
          id="_R_G_L_0_G_D_18_P_0"
          fill="#7263b1"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M111.44 6.01 C109.3,10.14 111.01,15.21 115.26,17.33 C119.52,19.45 124.72,17.82 126.87,13.69 C129.01,9.55 127.3,4.49 123.04,2.37 C118.78,0.25 113.59,1.88 111.44,6.01z "
        />
        <path
          id="_R_G_L_0_G_D_19_P_0"
          fill="#3d3d3d"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M118.45 1.47 C118.45,1.47 118.44,1.49 118.44,1.51 C116.29,5.64 118,10.7 122.26,12.82 C123.74,13.55 125.33,13.83 126.86,13.72 C124.7,17.82 119.53,19.45 115.28,17.33 C111.02,15.21 109.31,10.14 111.46,6.01 C112.87,3.31 115.57,1.69 118.46,1.47 C118.46,1.47 118.45,1.47 118.45,1.47z "
        />
        <path
          id="_R_G_L_0_G_D_20_P_0"
          fill="#e93405"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M66.97 95.06 C66.97,99.75 63.16,103.56 58.47,103.56 C53.77,103.56 49.97,99.75 49.97,95.06 C49.97,90.37 53.77,86.56 58.47,86.56 C63.16,86.56 66.97,90.37 66.97,95.06z "
        />
        <path
          id="_R_G_L_0_G_D_21_P_0"
          fill="#fffcf5"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M58.86 91.57 C58.86,93.24 57.5,94.6 55.83,94.6 C54.15,94.6 52.8,93.24 52.8,91.57 C52.8,89.9 54.15,88.54 55.83,88.54 C57.5,88.54 58.86,89.9 58.86,91.57z "
        />
        <path
          id="_R_G_L_0_G_D_22_P_0"
          fill="#3d3d3d"
          fillOpacity="0.3"
          fillRule="nonzero"
          d=" M64.19 88.79 C64.26,89.22 64.3,89.65 64.3,90.09 C64.3,94.79 60.5,98.59 55.8,98.59 C53.59,98.59 51.59,97.74 50.08,96.36 C50.71,100.44 54.22,103.56 58.47,103.56 C63.16,103.56 66.97,99.75 66.97,95.06 C66.97,92.57 65.89,90.35 64.19,88.79z "
        />
        <path
          id="_R_G_L_0_G_D_23_P_0"
          fill="#50439f"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M54.44 78.13 C52.51,78.13 50.94,79.92 50.94,82.13 C50.94,84.34 52.51,86.13 54.44,86.13 C56.38,86.13 57.94,84.34 57.94,82.13 C57.94,79.92 56.38,78.13 54.44,78.13z "
        />
        <path
          id="_R_G_L_0_G_D_24_P_0"
          fill="#50439f"
          fillOpacity="1"
          fillRule="nonzero"
          d=" M67.44 78.13 C65.51,78.13 63.94,79.92 63.94,82.13 C63.94,84.34 65.51,86.13 67.44,86.13 C69.38,86.13 70.94,84.34 70.94,82.13 C70.94,79.92 69.38,78.13 67.44,78.13z "
        />
        <g id="_R_G_L_0_G_D_25_P_0_G_0_T_0">
          <path
            id="_R_G_L_0_G_D_25_P_0"
            fill="#d9d9d9"
            fillOpacity="1"
            fillRule="nonzero"
            d=" M0 -1.5 C0.83,-1.5 1.5,-0.83 1.5,0 C1.5,0.83 0.83,1.5 0,1.5 C-0.83,1.5 -1.5,0.83 -1.5,0 C-1.5,-0.83 -0.83,-1.5 0,-1.5z "
          />
        </g>
        <g id="_R_G_L_0_G_D_26_P_0_G_0_T_0">
          <path
            id="_R_G_L_0_G_D_26_P_0"
            fill="#d9d9d9"
            fillOpacity="1"
            fillRule="nonzero"
            d=" M0 -1.5 C0.83,-1.5 1.5,-0.83 1.5,0 C1.5,0.83 0.83,1.5 0,1.5 C-0.83,1.5 -1.5,0.83 -1.5,0 C-1.5,-0.83 -0.83,-1.5 0,-1.5z "
          />
        </g>
      </g>
    </g>
    <g id="time_group" />
  </svg>
  //
);
export default AnimatedYellowMan;
