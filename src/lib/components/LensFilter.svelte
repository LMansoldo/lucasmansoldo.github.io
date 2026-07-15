<svg class="lens-defs" aria-hidden="true">
	<filter id="lens" x="-20%" y="-20%" width="140%" height="140%">
		<feTurbulence type="fractalNoise" baseFrequency="0.005 0.010" numOctaves="2" seed="9" result="n" />
		<feGaussianBlur in="n" stdDeviation="1.4" result="sn" />
		<feDisplacementMap in="SourceGraphic" in2="sn" scale="24" xChannelSelector="R" yChannelSelector="G" />
	</filter>
</svg>
