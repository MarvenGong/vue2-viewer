export default {
  methods: {
    resetFullImageStatus(index) {
      this.$data.listActiveIndex = index;
      var img = this.$refs['fullImage'];
      img.style.display = 'none';
      setTimeout(() => {
        let fullImageSizeAry = this.getImgNaturalStyle(img);
        this.$data.fullImageWidth = fullImageSizeAry[0];
        this.$data.fullImageHeight = fullImageSizeAry[1];
        img.style.display = '';
      }, 300);
    },
    showFullViewer(index) {
      this.$data.fullViewerVisible = true;
      this.resetFullImageStatus(index);
    },
    switchActiveIndex(index) {
      this.resetFullImageStatus(index);
    },
    hideFullViewer() {
      this.$data.fullViewerVisible = false;
    },
    /**
     * 放大
     */
    zoomIn() {
      this.$data.fullViewZoom += 0.1; 
    },
    /**
     * 缩小
     */
    zoomOut() {
      this.$data.fullViewZoom -= 0.1; 
    },
    /**
     * 大图鼠标滚轮
     */
    toggleZoomFullImage(obj) {
      // const zoom = parseInt(obj.style.zoom,10)||100;
      const zoom = obj.wheelDelta / 12;
      if(zoom > 0 ) {
        this.$data.fullViewZoom += 0.1;
      } else {
        if (this.$data.fullViewZoom <= 1) {
          return false;
        }
        this.$data.fullViewZoom -= 0.1;
      }
    },
    /**
     * 重置大小
     */
    resetFullImageSize() {
      this.$data.fullViewZoom = 1; 
    },
    /**
     * 获取src指向的图片的宽高尺寸
     */
    getImgNaturalStyle(img, callback) {
      var nWidth, nHeight
      if (img.naturalWidth) { // 现代浏览器
          nWidth = img.naturalWidth
          nHeight = img.naturalHeight
      } else {  // IE6/7/8
          var imgae = new Image();
          image.src = img.src;
          image.onload = function(){
              callback(image.width, image.height)
          }
      }
      return [nWidth, nHeight]
    },
    /**
     * 拖拽大图
     */
    mouseMove(e) {
      e.preventDefault();
      console.log(e);
      this.$data.fullImageMoveX += e.movementX;
      this.$data.fullImageMoveY += e.movementY;
    },
    /**
     * 重置大图的状态
     */
    resetFullImage() {
      this.$data.fullViewZoom = 1;
      this.$data.fullImageMoveX = 0;
      this.$data.fullImageMoveY = 0;
      this.$data.fullImageMoveX = 0;
      this.$data.fullImageMoveY = 0;
      this.$data.fullImageRotateX = 0;
      this.$data.fullImageScaleX = 0;
      this.$data.fullImageScaleY = 0;
    },
    /**
     * 水平方向上逆时针旋转
     */
    fullImageRotateLeft() {
      this.$data.fullImageRotateX -= 90;
    },
    /**
     * 水平方向上顺时针旋转
     */
    fullImageRotateRight() {
      this.$data.fullImageRotateX += 90;
    },
    /**
     * 水平方向翻转
     */
    toggleFullImageScaleX() {
      this.$data.fullImageScaleX = this.$data.fullImageScaleX === 0 ? -1 : 0;
    },
    /**
     * 垂直方向翻转
     */
    toggleFullImageScaleY() {
      this.$data.fullImageScaleY = this.$data.fullImageScaleY === 0 ? -1 : 0;
    },
    prev() {
      if (this.$data.listActiveIndex >= 1) {
        this.switchActiveIndex(this.$data.listActiveIndex - 1);
      }
    },
    next() {
      if (this.$data.listActiveIndex < this.thumb.length - 1) {
        this.switchActiveIndex(this.$data.listActiveIndex + 1);
      }
    }
  }
};
