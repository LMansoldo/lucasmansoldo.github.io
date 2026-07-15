<svg class="lens-defs" aria-hidden="true">
	<filter id="lens" x="-20%" y="-20%" width="140%" height="140%">
		<feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="9" result="n" />
		<feGaussianBlur in="n" stdDeviation="1.6" result="sn" />
		<feDisplacementMap in="SourceGraphic" in2="sn" scale="42" xChannelSelector="R" yChannelSelector="G" />
	</filter>
</svg>
